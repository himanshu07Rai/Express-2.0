const { format } = require("date-fns");
const { v4: uuid } = require("uuid");
const fs = require("fs");

const fsPromises = require("fs").promises;
const path = require("path");
// console.log(format(Date.now(), "dd/MM/yyyy\tHH:mm:SS"));

const logEvents = async (message) => {
  const dateTime = `${format(Date.now(), "dd/MM/yyyy\tHH:mm:SS")}`;
  const logItem = `${dateTime}\t${uuid()}\t${message}\n`;
  console.log(logItem);

  try {
    if (!fs.existsSync(path.join(__dirname, "logs"))) {
      await fsPromises.mkdir(path.join(__dirname, "logs"));
    }
    await fsPromises.appendFile(
      path.join(__dirname, "logs", "eventlog.txt"),
      logItem
    );
  } catch (error) {
    console.error(error);
  }
};

module.exports = logEvents;
