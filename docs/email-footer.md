# Email footer (product updates)

Every marketing or product update email must include this footer. Send updates only to people who ticked "Also send me occasional product updates" on the demo form (`consent_updates=yes`).

```html
<p style="font-size:12px;color:#6b6c70">
  You're getting this because you asked for GRC-Flow product updates.
  <a href="https://grc-flow.com/unsubscribe?email={{email}}">Unsubscribe</a>
  · <a href="https://grc-flow.com/privacy">Privacy policy</a><br>
  GRC-Flow, a product of Suscin Innovation Labs, Pune, India · talk@grc-flow.com
</p>
```

- `{{email}}` is your email tool's merge tag for the recipient's address (URL-encoded).
- In Brevo, also turn on the built-in unsubscribe link and the `List-Unsubscribe` header, so mail apps show their own unsubscribe button.
- Remove people within 10 days of an unsubscribe request at most, and never re-add them without new consent.
- Replies to demo requests and privacy requests aren't marketing and don't need the unsubscribe link.
