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
var Appointment = mongoose.model("Appointment");
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
  var newAppointment = new Appointment({
    company: req.body.company,
    title: req.body.title,
    type: req.body.type,
    date: req.body.date,
    time: req.body.time,
    description: req.body.description
  })

  newAppointment.save((err, result) => {
    if(err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
})

router.get("/", passport.authenticate('jwt', { session: false }),(req, res) => {
  var pageNum = req.params["page"] || 1;
  Appointment
  .find()
  .exec(function (err, appointments) {
    if (err) {
      res.send(err);
    } else {
      res.send(appointments);
    }
  })
})

router.get("/:id", passport.authenticate('jwt', { session: false }),(req, res) => {
  var companyId = req.params["id"];
  Appointment.find({"company": companyId},function (err, appointment) {
    if (err) {
      res.send(err);
    } else {
      res.send(appointment);
    }
  })
})

router.put("/:id", passport.authenticate('jwt', { session: false }),(req, res) => {
  var title = new mongodb.ObjectID(req.params["id"]);
  Appointment.find({"_id": title},function (err, appointment) {
    if (err) {
        res.status(500).send(err);
    } else {
        var appointment = appointment[0];
        appointment.company = req.body.company || appointment.company;
        appointment.title = req.body.title || appointment.title;
        appointment.type = req.body.type || appointment.type;
        appointment.date = req.body.date || appointment.date ;
        appointment.time = req.body.time || appointment.time ;
        appointment.message = req.body.message || appointment.message

       appointment.save(function (err, appointment) {
            if (err) {
                res.status(500).send(err)
            }
            res.send(appointment);
        });
    }
});
})

router.delete("/:id", passport.authenticate('jwt', { session: false }),(req, res) => {
  var appointmentid = new mongodb.ObjectID(req.params["id"]);
  Appointment.find({_id: appointmentid}).remove().then(() => {
    console.log("success");
    res.send("success");
  })
})

module.exports = router;
