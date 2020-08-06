//Install express server
const express = require("express");
const path = require("path"); // This is used for configuring the path

const app = express(); //Instantiating express as app

//Serve only the static files from the dist directory
//Need to replace the '/dist/<projec name>'

app.use(express.static(__dirname + "/dist/service-project"));
//Here we are saying app to use express staticlly where _dirname gives the root directory(When server runs it can access the process environments,paths etc)

app.get("*", function (
  req,
  res //*--> Default route,This route is used for the host
) {
  res.sendFile(path.join(__dirname + "/dist/service-project/index.html"));
});

// Listen is used for starting the app and will listen at the specified port
app.listen(process.env.PORT || 8081);
//process.env.PORT will have the value when we run it on the cloud server but in the local it will take 8080.
