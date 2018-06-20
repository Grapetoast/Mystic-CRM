var express = require("express");
var mongodb = require("mongodb");
var _ = require("lodash");
var bodyParser = require("body-parser");
var passport = require("passport");
var passportJWT = require("passport-jwt");
var jwt = require('jsonwebtoken');
var app = express();
var router = express.Router();
var mongoose = require("mongoose");
var Link = mongoose.model("Link");
var User = mongoose.model("User");
var bcrypt = require('bcryptjs');
var ExtractJwt = passportJWT.ExtractJwt;
var JwtStrategy = passportJWT.Strategy;
var recordsPerPage = 8;

var jwtOptions = {}
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme("JWT");
jwtOptions.secretOrKey = 'LokisBreath-420';

var strategy = new JwtStrategy(jwtOptions, function(jwt_payload, next) {
  User.findOne({"_id": jwt_payload.id}, function(err, user) {
    if (err) {
          return next(err, false);
      }
      if (user) {
          return next(null, user);
      } else {
          return next(null, false);
      }
  });
});

app.use(passport.initialize());
passport.use(strategy);
app.use(bodyParser.json());

router.post("/", (req,res) => {
  var newLink = new Link({
  company: req.body.company,
  url: req.body.url
  })

  newLink.save((err, result) => {
    if(err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
})

router.get("/:id", (req, res) => {
  var linkid = req.params["id"];
  Link.find({"_id": linkid},function (err, links) {
    if (err) {
      res.send(err);
    } else {
      res.send(links);
    }
  })
})

router.put("/:id", passport.authenticate('jwt', { session: false }),(req, res) => {
  var linkid = new mongodb.ObjectID(req.params["id"]);
  Link.find({"_id": linkid},function (err, link) {
    if (err) {
        res.status(500).send(err);
    } else {
        var link = link[0];
        link.company = req.body.company || link.company;
        link.url = req.body.url || link.url;

        link.save(function (err, link) {
            if (err) {
                res.status(500).send(err)
            }
            res.send(link);
        });
    }
});
})

router.delete("/:id", passport.authenticate('jwt', { session: false }),(req, res) => {
  var linkid = new mongodb.ObjectID(req.params["id"]);
  Link.find({_id: linkid}).remove().then(() => {
    console.log("success");
    res.send("success");
  })
})

module.exports = router;
