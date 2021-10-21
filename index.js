const os = require("os");
const path = require("path");

console.log(os.homedir());

console.log(__dirname);

console.log(__filename);

console.log(path.parse(__filename));
