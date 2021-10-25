const jwt = require("jsonwebtoken");
require("dotenv").config();

const verifyJWT = (req, res, next) => {
  //   console.log(req.headers);
  const authHeader = req.headers["authorization"];
  if (!authHeader) return res.sendStatus(401);
  // console.log(authHeader);
  const token = authHeader.split(" ")[1];
  // console.log("token : ", token);
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) return res.send(err.message); //Forbidden
    req.user = decoded.username;
    next();
  });
};

module.exports = verifyJWT;
