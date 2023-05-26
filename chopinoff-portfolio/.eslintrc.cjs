module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  plugins: [
    "react-refresh",
    "eslint-plugin-simple-import-sort",
    "@typescript-eslint",
    "unused-imports",
  ],
  rules: {
    "react-refresh/only-export-components": "warn",
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      rules: {
        "react/react-in-jsx-scope": "off",
        "simple-import-sort/imports": "error",
        "simple-import-sort/exports": "error",
        "@typescript-eslint/no-shadow": ["error"],
        "no-unused-vars": "off",
        "unused-imports/no-unused-imports-ts": ["error"],
        "no-shadow": "off",
        "no-undef": "off",
        "prettier/prettier": [
          "error",
          {
            endOfLine: "auto",
          },
        ],
      },
    },
  ],
};
