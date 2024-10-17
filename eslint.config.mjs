import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";

export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 2021, // or your desired ECMAScript version
        sourceType: "module",
      },
    },
    rules: {
      // Your custom rules
    },
  },
  pluginJs.configs.recommended,
  {
    ...pluginReact.configs.flat.recommended,
    settings: {
      react: {
        version: "detect", // Automatically detect the React version
      },
    },
  },
];
