console.log("Platform:", process.platform);
console.log("Release:", process.release);

import os from "os";
const arch = os.arch();
console.log("🚀 ~ file: index.js:3 ~ arch:", arch);
const machine = os.machine();
console.log("🚀 ~ file: index.js:5 ~ machine:", machine);
const version = os.version();
console.log("🚀 ~ file: index.js:5 ~ version:", version);
