# Deploy GRC-Flow on Oracle Cloud (Mumbai)

One Oracle Cloud Always Free VM runs everything with Docker:

| Address | What | Container |
|---|---|---|
| `grc-flow.com` (and `www.`) | The website | `website` |
| `app.grc-flow.com` | GRC agent, your real workspace | `app` |
| `demo.grc-flow.com` | GRC agent demo workspace, shown inside the website's Live demo page | `demo` |

[Caddy](https://caddyserver.com) sits in front, gets free HTTPS certificates from Let's Encrypt and renews them by itself.

Time needed: about an hour, most of it waiting for Oracle and DNS.

---

## 1. Create the server (Oracle Cloud)

1. **Sign up** at <https://signup.cloud.oracle.com>. When it asks for a **home region**, pick **India West (Mumbai)**. Always Free resources only exist in your home region, and it can't be changed later.
2. In the console, go to **Compute → Instances → Create instance**.
   - **Name:** `grc-flow`
   - **Image:** Canonical **Ubuntu 24.04** (or 22.04).
   - **Shape:** Change shape → **Ampere** → **VM.Standard.A1.Flex**, **2 OCPUs and 12 GB memory**. That's within the Always Free allowance (4 OCPUs and 24 GB in total). If Mumbai says it's **out of capacity**, try again later or with 1 OCPU and 6 GB.
   - **Networking:** keep the default new VCN and public subnet, with **Assign a public IPv4 address** ticked.
   - **SSH keys:** download the generated private key, or paste your own public key.
   - **Boot volume:** the default 50 GB is plenty.
3. Click **Create**. When it's running, copy the **Public IP address** (for example `140.238.x.x`).

### Open ports 80 and 443

Oracle blocks web traffic in two places. Open both.

**a) The network's security list.** Instance page → **Primary VNIC → Subnet → Security** (or **Security Lists**) → **Default Security List** → **Add Ingress Rules**. Add two rules:

| Source CIDR | IP protocol | Destination port |
|---|---|---|
| `0.0.0.0/0` | TCP | `80` |
| `0.0.0.0/0` | TCP | `443` |

**b) The VM's own firewall.** Oracle's Ubuntu images ship with iptables rules that reject everything except SSH. Connect, then allow web traffic:

```bash
ssh -i path/to/private.key ubuntu@YOUR_PUBLIC_IP

sudo iptables -I INPUT 6 -m state --state NEW -p tcp --dport 80 -j ACCEPT
sudo iptables -I INPUT 6 -m state --state NEW -p tcp --dport 443 -j ACCEPT
sudo iptables -I INPUT 6 -m state --state NEW -p udp --dport 443 -j ACCEPT
sudo netfilter-persistent save
```

## 2. Point the domain at the server (Namecheap)

Namecheap → **Domain List** → `grc-flow.com` → **Manage** → **Advanced DNS** → **Host Records**.

1. **Delete** Namecheap's parking records, usually a `CNAME` for `www` pointing to `parkingpage.namecheap.com` and a `URL Redirect` for `@`.
2. **Add four A records**, each with your server's public IP and TTL `Automatic`:

| Type | Host | Value |
|---|---|---|
| A Record | `@` | `YOUR_PUBLIC_IP` |
| A Record | `www` | `YOUR_PUBLIC_IP` |
| A Record | `app` | `YOUR_PUBLIC_IP` |
| A Record | `demo` | `YOUR_PUBLIC_IP` |

> **Don't touch the mail settings.** `talk@grc-flow.com` runs on Gmail. Leave the MX and TXT (SPF, DKIM) records for Google exactly as they are, or email stops arriving.

DNS usually updates within 30 minutes. Check from your PC:

```
nslookup grc-flow.com
nslookup app.grc-flow.com
nslookup demo.grc-flow.com
```

Each should show your server's IP. Wait for this before step 4, or the HTTPS certificates can't be issued.

## 3. Install Docker and get the code

On the server:

```bash
curl -fsSL https://get.docker.com | sudo sh
sudo usermod -aG docker ubuntu
exit                      # log out and back in so the group change applies
ssh -i path/to/private.key ubuntu@YOUR_PUBLIC_IP

git clone https://github.com/Harshitahusts/GRC-WEBSITE.git
cd GRC-WEBSITE/deploy
cp .env.example .env
nano .env                 # set ANTHROPIC_API_KEY; the rest is already right for grc-flow.com
```

The GRC agent app is fetched from `https://github.com/Harshitahusts/GRC-Ai` while building. If that repo becomes private, clone it next to this one and set `GRC_AI_CONTEXT=../../GRC-Ai` in `.env`.

## 4. Start everything

```bash
docker compose up -d --build
```

The first build takes 5 to 10 minutes. Then check:

```bash
docker compose ps         # website, app and demo should say (healthy)
docker compose logs caddy # look for "certificate obtained successfully" for each domain
```

Open <https://grc-flow.com>, <https://app.grc-flow.com> and <https://grc-flow.com/demo>.

### Create your login for the real workspace

```bash
docker compose exec app grc-web adduser yourname
```

It asks for a password. Sign in at <https://app.grc-flow.com>. Add colleagues the same way.

---

## Everyday tasks

**Update after changes are merged on GitHub:**

```bash
cd ~/GRC-WEBSITE && git pull
cd deploy && docker compose up -d --build
```

To pick up a new version of the GRC agent app as well: `docker compose build --no-cache app && docker compose up -d`.

**Back up the real workspace** (do this regularly and copy the file off the server):

```bash
docker run --rm -v grcflow_grc-data:/data -v "$PWD":/backup alpine \
  tar czf /backup/grc-data-$(date +%F).tgz -C /data .
```

**Reset the demo to fresh sample data:**

```bash
docker compose rm -sf demo && docker volume rm grcflow_grc-demo && docker compose up -d demo
```

**See what's happening:** `docker compose logs -f app` (or `website`, `demo`, `caddy`).

**Restart after a server reboot:** nothing to do. Every container restarts on its own.

## Security notes

- `.env` holds your API key. It's git-ignored; never commit it.
- The real workspace (`app.`) can't be embedded in any other site. The demo (`demo.`) can only be embedded by `grc-flow.com`.
- Session cookies are HTTPS-only (`GRC_SECURE_COOKIES=1`) and `SameSite=Strict`.
- The demo runs with simulated AI answers (`GRC_AI_MODE=demo`), so public visitors can't spend your Anthropic credits. Still set a monthly spend limit on the key at <https://console.anthropic.com>.
- Only ports 22, 80 and 443 should be open. The containers aren't reachable directly from the internet; only Caddy is.

## Troubleshooting

| Problem | Fix |
|---|---|
| Browser says the site can't be reached | Check both firewalls in step 1, and that `nslookup` shows the right IP. |
| Caddy logs show certificate errors | DNS isn't pointing at the server yet, or port 80 is blocked. Fix it, then `docker compose restart caddy`. |
| The build stops with "killed" or runs out of memory | Use at least 6 GB of memory, or add swap: `sudo fallocate -l 4G /swapfile && sudo chmod 600 /swapfile && sudo mkswap /swapfile && sudo swapon /swapfile`. |
| Live demo page says "The demo workspace isn't running" | `docker compose ps demo` and `docker compose logs demo`. |
| Demo shows 0 engagements | Reset the demo (see above). |
