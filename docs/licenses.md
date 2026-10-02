# Licences

## Fonts and icons

- **Fonts:** none are bundled. The site uses each device's built-in system fonts (`system-ui`, Segoe UI, Roboto and so on), so no font files are downloaded or licensed from third parties.
- **Icons:** ported from the GRC agent app ([Harshitahusts/GRC-Ai](https://github.com/Harshitahusts/GRC-Ai), MIT licence).
- **Images:** none. The logo and diagrams are inline SVG drawn for this site.

## Code shipped to visitors' browsers

| Package | Licence |
|---|---|
| next | MIT |
| react, react-dom | MIT |

Tailwind CSS (MIT) compiles to plain CSS at build time; no Tailwind code runs in the browser.

## Build and server-only packages

Checked from `node_modules` on 2 October 2026. Most are MIT, ISC, Apache-2.0 or BSD. The exceptions:

| Package | Licence | Why it's fine |
|---|---|---|
| lightningcss | MPL-2.0 | Build-time CSS tool, not modified or shipped |
| caniuse-lite | CC-BY-4.0 | Browser-support data used at build time |
| @img/sharp-libvips-* | LGPL-3.0-or-later | Optional native image library Next.js installs for `next/image`. This site doesn't use `next/image`, and the library is only dynamically linked on the server |

Re-check after adding dependencies:

```bash
npx license-checker --summary
```
