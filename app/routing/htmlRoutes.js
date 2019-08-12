// dependencies
const path = require('path');

// routing
module.exports = function (app) {
  // route to survey page
  app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });
  // default to homepage if no routes are found
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
}