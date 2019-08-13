// link to friends.js
const friends = require("../data/friends");

// routing
module.exports = function(app) {
    // GET route
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });
    // POST route
    app.post("/api/friends", function(req, res) {
        const bestMatch = {
            name: "",
            photo: "",
            friendDifference: Infinity
        };

        // get info after submit
        let userData = req.body;
        // get score of most recent application
        let userScore = userData.scores;
        // set empty array
        let userScoreArr = [];

        // convert strings to integer and push to userScoreArr
        for (let i = 0; i < userScore.length; i++) {
            console.log(parseInt(userScore[i]));
            userScoreArr.push(parseInt(userScore[i]));
        }

        // console.log(friends)
        console.log(userData);

        // loop through all objects in friends.js and get their scores
        for (let i = 0; i < friends.length; i++) {
            console.log(friends[i].scores);
            let storedScoreArr = friends[i].scores;
            let totalDifference = 0;
            // subtract userScoreArr from storedScoreArr
            // let x = userScoreArr.map(function(item, index) {
            //     return item - storedScoreArr[index];
            // });
            totalDifference +=
                parseInt(userScoreArr) - parseInt(storedScoreArr);
            console.log(Math.abs(totalDifference));

            if (totalDifference <= bestMatch) {
                bestMatch.name = userData.name;
                bestMatch.photo = userData.photo;
                bestMatch.totalDifference = totalDifference;
            }
            // set to an absolute value
            // let absoluteArray = x.map(Math.abs);
            // console.log(absoluteArray);
        }
        friends.push(req.body);
        res.json(true);
    });
};
