// link to friends.js
const friends = require('../data/friends');

// routing
module.exports = function(app) {
    // GET route
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });
    // POST route
    app.post("/api/friends", function(req, res) {
        friends.push(req.body);
        res.json(true);
    });
};