// import sum from "./localModule"; // if export default inside localModule.js file

// const localModule = require("./localModule"); //if module.exports inside localModule.js file
// const { sum, mul } = localModule;
import { sum, mul } from "./localModule";
console.log("🚀 ~ file: index.js:4 ~ sum():", sum());
console.log("🚀 ~ file: index.js:5 ~ mul:", mul());
