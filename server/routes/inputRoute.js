var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");

// Defines HOW Documents will be saved to the Database
var ChiyaksSchema = mongoose.Schema({
  first : String,
  last: String
});

/*
  Employees(GET) - Is a reference to the collection when finding things in the DB,
  Employees(POST) - Is a reference to the Schema, when we are saving things to the DB.
*/
var TeamMember = mongoose.model("teams", ChiyaksSchema);

//Save a new employee
router.post("/getChi", function(req,res){
  //Instance of the Model to be saved to the database

  var chiTeam = [];
  chiTeam = [{
    first: "Emily",
    last: "Hoang"
  },
  {first: "Claudia",
    last: "Calderas"
  },
  {first: "Anna",
  last: "Springfield"
  },
  {first: "Besty",
  last: "Rowley"
  },
  {first: "Chris",
  last: "Topherkeller"
  },
  {first: "Craig",
  last: "Baird"
  },
 {first:"Dan",
 last: "Zera"
  },
 {first: "Erin",
 last: "Kinnen"
  },
  {first: "Keith",
  last: "Tomlinson"
  },
  {first: "Kevin",
  last: "Dahlberg"
  },
  {first: "Lisa",
  last: "Schoofs"
  },
  {first: "Nic",
  last: "Wilson"
  },
  {first: "Olga",
  last: "Oengels"
  },
  {first: "Teigen",
  last: "Leonard"
  },
  {first: "YPaul",
  last: "Ysussman"
  },
  {first: "Anisa",
  last: "Anisa"
  },
  {first: "Brit",
  last: "Dickman"
  },
  {first: "Logan",
  last: "Kelly"},
  ];

    for (var p of chiTeam ) {
      var member = new TeamMember();
      member.first = p.first;
      member.last = p.last;
      member.save(function(err, savedMember){
        console.log(err);

      });
    }



});

module.exports = router;
