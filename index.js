const fs = require("fs");
const path = require("path");

fs.readFile(path.join(__dirname, "text.txt"), "utf-8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

console.log("1");

fs.writeFile(path.join(__dirname, "op.txt"), "text reply", (err) => {
  if (err) throw err;
  console.log("success");
});

console.log("2");
