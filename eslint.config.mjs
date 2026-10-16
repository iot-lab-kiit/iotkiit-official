import { defineConfig } from "eslint/config";
import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig([{
    ignores: [".next/**", "out/**", "build/**", "next-env.d.ts"],
}, {
    extends: [...nextCoreWebVitals],
}, {
    // `set-state-in-effect` is a new rule in eslint-plugin-react-hooks v6
    // (bundled via eslint-config-next 16). Existing code uses intentional
    // patterns it flags: URL-driven state sync, hydration-safe random
    // initialization, and async image-decode lifecycles. Kept as warnings
    // so the new rule stays visible without failing the lint baseline.
    rules: {
        "react-hooks/set-state-in-effect": "warn",
    },
}]);