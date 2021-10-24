const express = require("express");
const cors = require("cors");
const app = express();
const path = require("path");
const logger = require("./middlewares/logEvents");

// custom middleware logger

app.use(logger);
/*
const whitelist = ["http://localhost:5000"];

const corsOptions = {
  origin: (origin, callback) => {
    if (whitelist.indexOf(origin) !== -1) {
      console.log("lkl");
      callback(null, true);
    } else {
      callback(new Error("Not alowed by CORS"));
    }
  },
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

*/

app.use(cors());

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

app.get("^/$|/index(.html)?", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});
app.get("^/new$|/new-page(.html)?", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "new-page.html"));
});

app.get("^/users/:userId([0-9]{6})", function (req, res) {
  res.send("Route match for User ID: " + req.params.userId);
});

app.get("*", (req, res) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server runnig on port ${PORT}`));
