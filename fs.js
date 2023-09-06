import fs from "fs";

/*using read file sync*/
// const readFile = fs.readFileSync("./file.md", "utf-8");
// console.log("🚀 ~ file: fs.js:4 ~ readFile:", readFile);
// const copyFile = fs.writeFileSync("./copyFile.md", readFile, "utf-8"); //Auto Create File

/*using read file*/
// fs.readFile("./big.txt", "utf-8", (err, data) => {
//   if (err) {
//     throw err;
//   } else {
//     console.log("🚀 ~ file: fs.js:9 ~ fs.readFileSync ~ data:", data);
//   }
// });

/*unlink => to delete your file from project*/
// fs.readFile("./file.md", "utf-8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
//   fs.unlink("./file.md", (err) => {
//     if (err) throw err;
//     console.log("path/file.txt was deleted");
//   });
// });

/* fs.writeFile is equevilant with the fs.appendFile when the new file is not exist*/

/*to rename your files*/
// fs.rename("./copyFile.md", "./CFile.md", function (err) {
//   if (err) throw err;
//   console.log("File Renamed!");
// });

/*creatReadStream from fs  */
const readS = fs.createReadStream("./big.txt", "utf8");
readS.on("data", (chunk) => {
  console.log("\n################################################\n");
  console.log(chunk);
});
