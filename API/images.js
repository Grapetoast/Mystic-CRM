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
var Campaign = mongoose.model("Campaign");
var User = mongoose.model("User");
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


router.get('/:campaignid/:leadId', function (req,res, next) {
  var campaignid = new mongodb.ObjectID(req.params["campaignid"]);
  var leadId = req.params["leadId"];
  Campaign.findOne({"_id": campaignid},function (err, campaign) {
    if (err) {
      res.send(err);
    } else {
      campaign.openLog.push({leadId: leadId, time: new Date()})
      campaign.save(function (err, campaign) {
          if (err) {
              res.status(500).send(err)
          }
          var options = {
            root: __dirname + '/images/',
            dotfiles: 'deny',
            headers: {
                'x-timestamp': Date.now(),
                'x-sent': true
            }
          };
          let fileName = 'transparent.png';
          res.sendFile(fileName, options, function (err) {
            if (err) {
              next(err);
            } else {
              console.log('Sent:', fileName);
            }
          });
      });
    }
  })
})

module.exports = router;
