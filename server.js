// Require dependencies
const express = require("express");
const path = require("path");

// Set up express
const app = express();
// Set port
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(
    express.urlencoded({
        extended: true
    })
);
app.use(express.json());

// require routes
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// listen to port
app.listen(PORT, function() {
    console.log(`app is listening to http://localhost:${PORT}`);
});
