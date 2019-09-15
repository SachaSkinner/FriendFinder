var friendsData = require("../data/friends.json");
var fs = require("fs");


module.exports = function (app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function (req, res) {
    res.json(friendsData);
  });

  app.post("/api/friends", function (req, res) {
    var userData = req.body;

    var closestFriend;
    var lowestTotalDif;

    for (var i = 0; i < friendsData.length; i++) {
      var friend = friendsData[i];
      var totalDif = 0;

      for (var s = 0; s < friend.scores.length; s++) {

        totalDif += Math.abs(friend.scores[s] - parseInt(userData.scores[s]));
        // console.log(parseInt(userData.scores[s]));
      }

      if ((i === 0) || (totalDif < lowestTotalDif)) {
        closestFriend = friend;
        lowestTotalDif = totalDif;
      }

    }

    console.log(closestFriend);
    console.log(lowestTotalDif);

    friendsData.push(userData);
    fs.writeFile("app/data/friends.json", JSON.stringify(friendsData), function (err) {
      if (err) {
        return console.log(err);
      }

      console.log("The file was saved!");
    });
    res.json(closestFriend);
  })








};