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
var User = mongoose.model("User");
var Survey = mongoose.model("Survey");
var bcrypt = require('bcryptjs');
var ExtractJwt = passportJWT.ExtractJwt;
var JwtStrategy = passportJWT.Strategy;

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
  var newSurvey = new Survey({
    company: req.body.company,
    time: req.body.time,
    questions: req.body.questions,
    results: req.body.results
  })

  newSurvey.save((err, result) => {
    if(err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
})

router.get("/", passport.authenticate('jwt', { session: false }),(req, res) => {
  var pageNum = req.params["page"] || 1;
  Survey
  .find()
  .exec(function (err, surveys) {
    if (err) {
      res.send(err);
    } else {
      res.send(surveys);
    }
  })
})

router.get("/:id", passport.authenticate('jwt', { session: false }),(req, res) => {
  var companyId = req.params["id"];
  Survey.find({"company": companyId},function (err, survey) {
    if (err) {
      res.send(err);
    } else {
      res.send(survey);
    }
  })
})

router.put("/:id", passport.authenticate('jwt', { session: false }),(req, res) => {
  var title = new mongodb.ObjectID(req.params["id"]);
  Survey.find({"_id": title},function (err, survey) {
    if (err) {
        res.status(500).send(err);
    } else {
        var survey = survey[0];
        survey.company = req.body.company || survey.company;
        survey.time = req.body.time || survey.time
        survey.questions = req.body.questions || survey.questions
        survey.results = req.body.results || survey.results

       survey.save(function (err, survey) {
            if (err) {
                res.status(500).send(err)
            }
            res.send(survey);
        });
    }
});
})

router.delete("/:id", passport.authenticate('jwt', { session: false }),(req, res) => {
  var surveyid = new mongodb.ObjectID(req.params["id"]);
  Survey.find({_id: surveyid}).remove().then(() => {
    console.log("success");
    res.send("success");
  })
})

module.exports = router;
