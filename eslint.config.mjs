// Lint rules for the website. `npm run lint` runs them, and CI runs them on every pull
// request (.github/workflows/ci-deploy.yml).
//
// - Next.js core-web-vitals and TypeScript configs: Next, React and React Hooks rules.
// - eslint-plugin-security and eslint-plugin-no-unsanitized: risky patterns such as
//   eval, unsafe regular expressions and writing untrusted HTML into the page.
//
// package.json "overrides" keep `npm audit` at zero for these tools:
// - Next's lint plugin pins fast-glob 3.3.1, which pulls in braces (GHSA-vfj7-8cjw-p6xm,
//   no fixed release). It only uses globSync(pattern, { onlyDirectories }), which
//   tinyglobby provides with the same API, so tinyglobby stands in for it.
// - source-map-js (used by PostCSS) is lifted to 1.2.2 for GHSA-68fv-2mgg-jv7q.
import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import noUnsanitized from "eslint-plugin-no-unsanitized";
import security from "eslint-plugin-security";

export default defineConfig([
  ...nextVitals,
  ...nextTs,
  security.configs.recommended,
  noUnsanitized.configs.recommended,
  {
    rules: {
      // Flags every obj[key] lookup. Here the keys are array indexes and fixed keys
      // written in the code, never user input, so it only adds noise.
      "security/detect-object-injection": "off",
    },
  },
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
]);
