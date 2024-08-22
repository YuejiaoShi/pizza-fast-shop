export default {
  semi: false,
  singleQuote: true,
  trailingComma: "all",
  pluginSearchDirs: false,
  plugins: ["prettier-plugin-sort-imports"],
  importOrder: ["^@", "^[a-zA-Z0-9-]+", "^[./]"],
};
