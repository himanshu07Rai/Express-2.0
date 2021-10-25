const whitelist = ["http://localhost:5000", "http://localhost:3000"];

module.exports = {
  origin: (origin, callback) => {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not alowed by CORS"));
    }
  },
  optionsSuccessStatus: 200,
};
