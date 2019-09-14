var friendsData = require("../data/friends.js");


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
    // var totalDif = 0;

    // console.log(userData)
    for (var i = 0; i < userData.scores.length; i++) {
      // console.log(parseInt(userData.scores[i]))
    }

    for(var i =0; i<friendsData.length; i++){
      var totalDif = 0;
     
      
    // console.log(friendsData[i]);

      for(var s = 0;s<friendsData.scores;s++){

        totalDif += Math.abs(friendsData.scores[s] - parseInt(userData.scores[s]));
        // console.log(parseInt(userData.scores[s]));
      }
      var lookAt = friendsData.name[i] + totalDif;
      console.log(lookAt)
    }
    // console.log(totalDif);
    // res.send("Best match!!!!!");
    // friendsData.push(userData);
  })








};