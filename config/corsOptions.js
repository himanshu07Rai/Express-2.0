const allowedOrigins = require("./allowedOrigins");
module.exports = {
  origin: (origin, callback) => {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not alowed by CORS"));
    }
  },
  optionsSuccessStatus: 200,
};
