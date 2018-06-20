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
var Employee = mongoose.model("Employee");
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
  var newEmployee = new Employee({
  name: req.body.name,
  phone: req.body.phone,
  email: req.body.email,
  address: req.body.address,
  position: req.body.position,
  admin: req.body.admin
  })

  newEmployee.save((err, result) => {
    if(err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
})

router.get("/:page", passport.authenticate('jwt', { session: false }),(req, res) => {
  var pageNum = req.params["page"] || 1;
  Employee
  .find()
  .skip((pageNum - 1) * recordsPerPage)
  .limit(recordsPerPage)
  .exec(function (err, employees) {
    if (err) {
      res.send(err);
    } else {
      res.send(employees);
    }
  })
})

router.get("/name/:name/:page", passport.authenticate('jwt', { session: false }),(req, res) => {
  var employeeName = req.params["name"];
  var pageNum = req.params["page"] || 1;
  Employee
  .find({"name": {$regex: '^' + employeeName}})
  .skip((pageNum - 1) * recordsPerPage)
  .limit(recordsPerPage)
  .exec(function (err, employees) {
    if (err) {
      res.send(err);
    } else {
      res.send(employees);
    }
  })
})

router.get("/id/:id", passport.authenticate('jwt', { session: false }),(req, res) => {
  var employeeid = new mongodb.ObjectID(req.params["id"]);
  Employee.find({"_id": employeeid},function (err, employees) {
    if (err) {
      res.send(err);
    } else {
      res.send(employees);
    }
  })
})

router.put("/:id", passport.authenticate('jwt', { session: false }),(req, res) => {
  var employeeid = new mongodb.ObjectID(req.params["id"]);
  Employee.find({"_id": employeeid},function (err, employee) {
    if (err) {
        res.status(500).send(err);
    } else {
        var employee = employee[0];
        employee.name = req.body.name || employee.name;
        employee.phone = req.body.phone || employee.phone;
        employee.email = req.body.email || employee.email;
        employee.address = req.body.address || employee.address;
        employee.position = req.body.position || employee.position;
        employee.admin = req.body.admin || employee.admin;

        employee.save(function (err, employee) {
            if (err) {
                res.status(500).send(err)
            }
            res.send(employee);
        });
    }
});
})

router.delete("/:id", passport.authenticate('jwt', { session: false }),(req, res) => {
  var employeeid = new mongodb.ObjectID(req.params["id"]);
  Employee.find({_id: employeeid}).remove().then(() => {
    console.log("success");
    res.send("success");
  })
})

module.exports = router;
