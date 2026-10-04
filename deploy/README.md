# Deploy GRC-Flow

The website is deployed together with the GRC Flow app, on one Oracle Cloud server, by the
app's setup script. Follow the single guide in the app's repository:

**[GRC-Ai: docs/DEPLOY_ORACLE.md](https://github.com/Harshitahusts/GRC-Ai/blob/main/docs/DEPLOY_ORACLE.md)**

It covers the Oracle Cloud (Mumbai) server, the Namecheap DNS records and one command that runs:

| Address | What |
|---|---|
| `grc-flow.com` (and `www.`) | This website, built from this repo's `main` branch with the `Dockerfile` here |
| `app.grc-flow.com` | GRC Flow, the app. The website's **Sign in** links go here, and its sign-in page links back |

To put website changes live: merge them into `main`, then on the server run
`cd ~/grc-flow && bash deploy/setup-server.sh`. It rebuilds the website from the latest `main`.

**Automatic deploys:** `.github/workflows/ci-deploy.yml` checks every pull request (type-check, build, Docker image). After a merge to `main` it deploys to the server and checks that grc-flow.com answers. It needs the four `DEPLOY_*` secrets described under "Automatic deploys from GitHub" in the guide above. Until they're added, the deploy step is skipped.
