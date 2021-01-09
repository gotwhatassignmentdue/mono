const data = require("./src/mockdata.json");
function authUser(req, res, next) {
  const token = req.header("auth-token");
  if (!token) return res.status(401).send("Acess Denied");
  if (data[token]) {
    req.userData = data[token];
    next();
  } else {
    res.status(400).send("Invalid Token");
  }
}

module.exports = {
  authUser,
};
