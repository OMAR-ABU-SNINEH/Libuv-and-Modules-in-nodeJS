const fs = require("fs");
const readContent = fs.readFileSync("./file.md", "utf-8");
const marked = require("marked"); //external module create using this [code npm i marked]
const htmlContent = marked.parse(readContent);
console.log("🚀 ~ file: marked-fs.js:5 ~ htmlContent:", htmlContent);
const writeHtmlFile = fs.writeFileSync("./htmlFile.html", htmlContent, "utf-8");
