const files = [
  "index.html",
  "styles.css",
  "script.js",
  "site.htm",
  "kek.html",
  "style.css",
];

const filterFiles = files.filter((files) => files.endsWith(".html"));

console.log(filterFiles);
