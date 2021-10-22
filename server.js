const http = require("http");
const path = require("path");
const fs = require("fs");
const fsPromises = require("fs").promises;

const logEvents = require("./logEvents");

const EventEmitter = require("events");

class Emitter extends EventEmitter {}

const myEmitter = new Emitter();

// myEmitter.on("log", (msg) => logEvents(msg));

// myEmitter.emit("log", "Log event emitted");

const PORT = process.env.PORT || 5000;

const server = http.createServer((req, res) => {
  console.log(`${req.url}\t${req.method}
  `);
});

server.listen(PORT, () => console.log(`Server runnig on port ${PORT}`));
