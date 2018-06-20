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
var stringify = require('csv-stringify');
var path = __dirname + "/csv/";
var fs = require('fs');
var Lead = mongoose.model("Lead");
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
  var newLead = new Lead({
  company: req.body.company,
  name: req.body.name,
  phone: req.body.phone,
  email: req.body.email,
  address: req.body.address,
  status: req.body.status,
  url: req.body.url,
  comment: req.body.comment
  })

  newLead.save((err, result) => {
    if(err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
})

router.get("/export/:company", passport.authenticate('jwt', { session: false }),(req, res) => {
  var company = req.params["company"];
  Lead
  .find({"company": company})
  .exec(function (err, leads) {
    if (err) {
      res.send(err);
    } else {
      stringify(leads, function(err, output){
        let file = fs.writeFileSync(path + 'data.csv', output);
        res.sendFile(path + 'data.csv');
      });
    }
  })
})

router.get("/:company/:page", passport.authenticate('jwt', { session: false }),(req, res) => {
  var pageNum = req.params["page"] || 1;
  var company = req.params["company"];
  Lead
  .find({"company": company})
  .skip((pageNum - 1) * recordsPerPage)
  .limit(recordsPerPage)
  .exec(function (err, leads) {
    if (err) {
      res.send(err);
    } else {
      res.send(leads);
    }
  })
})

router.get("/name/:name/:company/:page", passport.authenticate('jwt', { session: false }),(req, res) => {
  var leadName = req.params["name"];
  var pageNum = req.params["page"] || 1;
  var company = req.params["company"];
  Lead
  .find({"name": {$regex: '^' + leadName}, "company": company})
  .skip((pageNum - 1) * recordsPerPage)
  .limit(recordsPerPage)
  .exec(function (err, leads) {
    if (err) {
      res.send(err);
    } else {
      res.send(leads);
    }
  })
})

router.get("/id/:id", passport.authenticate('jwt', { session: false }),(req, res) => {
  var leadid = new mongodb.ObjectID(req.params["id"]);
  Lead.find({"_id": leadid},function (err, leads) {
    if (err) {
      res.send(err);
    } else {
      res.send(leads);
    }
  })
})

router.put("/:id", passport.authenticate('jwt', { session: false }),(req, res) => {
  var leadid = new mongodb.ObjectID(req.params["id"]);
  Lead.find({"_id": leadid},function (err, lead) {
    if (err) {
        res.status(500).send(err);
    } else {
        var lead = lead[0];
        lead.company = req.body.company || lead.company;
        lead.name = req.body.name || lead.name;
        lead.phone = req.body.phone || lead.phone;
        lead.email = req.body.email || lead.email;
        lead.address = req.body.address || lead.address;
        lead.status = req.body.status || lead.status;
        lead.url = req.body.url || lead.url;
        lead.comment = req.body.comment || lead.comment;

        lead.save(function (err, lead) {
            if (err) {
                res.status(500).send(err)
            }
            res.send(lead);
        });
    }
});
})

router.delete("/:id", passport.authenticate('jwt', { session: false }),(req, res) => {
  var leadid = new mongodb.ObjectID(req.params["id"]);
  Lead.find({_id: leadid}).remove().then(() => {
    console.log("success");
    res.send("success");
  })
})

module.exports = router;
