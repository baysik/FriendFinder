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
        var totalDifference;
        // get score of most recent application
        // let userScore = userData.scores;
        // set empty array
        // let userScoreArr = [];

        // console.log(friends)
        console.log("USER DATA", userData);

        // loop through all objects in friends.js and get their scores
        for (let i = 0; i < friends.length; i++) {
            //   console.log("Loop through submission: ", friends[i].scores);
            let storedScoreArr = friends[i];
            totalDifference = 0;
            // subtract userScoreArr from storedScoreArr
            // let x = userScoreArr.map(function(item, index) {
            //     return item - storedScoreArr[index];
            // });
            // convert strings to integer and push to userScoreArr
            for (let j = 0; j < storedScoreArr.scores.length; j++) {
                var currentScores = storedScoreArr.scores[j];

                console.log("ALL CURRENT SCORES: ", currentScores);

                var newFriend = userData.scores[j];

                console.log("newFriend Scores", newFriend);
                // userScoreArr.push(parseInt(userScore[j]));

                totalDifference += Math.abs(
                    parseInt(newFriend) - parseInt(currentScores)
                );
                console.log("=============== ", totalDifference);
            }
            if (totalDifference <= bestMatch.friendDifference) {
                console.log("Total Difference: ", totalDifference);
                bestMatch.name = storedScoreArr.name;
                bestMatch.photo = storedScoreArr.photo;
                bestMatch.friendDifference = totalDifference;
            }
            // set to an absolute value
            // let absoluteArray = x.map(Math.abs);
            // console.log(absoluteArray);
        }
        friends.push(userData);
        res.json(bestMatch);
        console.log("BEST MATCH", bestMatch);
    });
};
