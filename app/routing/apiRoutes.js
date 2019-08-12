// link to friends.js
const friends = require('../data/friends');

// routing
module.exports = function (app) {
    // GET route
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });
    // POST route
    app.post("/api/friends", function (req, res) {
        // get info after submit
        let userData = req.body;
        // get score of most recent application
        let userScore = userData.scores
        // set empty array
        let userScoreArr = []

        // for loop and push to array with numbers
        for (let i = 0; i < userScore.length; i++) {
            console.log(parseInt(userScore[i]));
            userScoreArr.push(parseInt(userScore[i]));
        }

        // console.log(friends)
        console.log(userData)

        // loop through all objects in friends.js and get their scores
        for (let i = 0; i < friends.length; i++) {
            console.log(friends[i].scores)
            let storedScoreArr = friends[i].scores;
            let x = userScoreArr.map(function (item, index) {
                return item - storedScoreArr[index];
            })
            let absoluteArray = x.map(Math.abs);
            console.log(absoluteArray);
        }
        friends.push(req.body);
        res.json(true);
    });



};