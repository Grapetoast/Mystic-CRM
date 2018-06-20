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
var Company = mongoose.model("Company");
var User = mongoose.model("User");
var Lead = mongoose.model("Lead");
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
  var newCampaign = new Campaign({
    name: req.body.name,
    company: req.body.company,
    templateId: req.body.templateId,
    target: req.body.target,
    startDate: req.body.startDate,
    endDate: req.body.endDate,
    analyze: req.body.analyze,
    active: req.body.active,
    log: req.body.log,
    openLog: req.body.openLog,
    linkLog: req.body.linkLog
  })

  newCampaign.save((err, result) => {
    if(err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
})

router.post("/link/:campaignId", (req,res) => {
  var campaignid = req.params["campaignId"];
  Campaign.find({"_id": campaignid},function (err, campaign) {
    if (err) {
        res.status(500).send(err);
    } else {
        var campaign = campaign[0];
        if (campaign.linkLog.length === 0) {
          campaign.linkLog = []
        }
        try {
          campaign.linkLog.push({lead: req.body.lead, link: req.body.link, time: new Date()})
        } catch(err) {
          console.log(err)
        }

        campaign.save(function (err, campaign) {
            if (err) {
                res.status(500).send(err)
            }
            res.send(campaign);
        });
    }
  });
})

router.post("/unsubscribe", (req,res) => {
  Campaign.findOne({"_id": req.body.campaign},function (err, campaign) {
    if (err) {
      res.status(500).send(err);
    } else {
      Lead.find({"_id": req.body.lead}).remove().then(() => {
        Company.find({"companyId": campaign.company},function (err, company) {
          if (err) {
              res.status(500).send(err);
          } else {
            var company = company[0];
            if (company.unsubscribeLog === null) {
              company.unsubscribeLog = []
            }
            try {
              company.unsubscribeLog.push({lead: req.body.lead, time: new Date()})
            } catch(err) {
              console.log(err)
            }

            company.save(function (err, campaign) {
                if (err) {
                    res.status(500).send(err)
                }
                res.send('success');
            });
          }
        });
      })
      .catch(err => {
        console.log(err);
      })
    }
  })
})

router.get("/:companyId", passport.authenticate('jwt', { session: false }),(req, res) => {
  var companyId = req.params["companyId"]
  Campaign.find({"company": companyId},function (err, campaigns) {
    if (err) {
      res.send(err);
    } else {
      res.send(campaigns);
    }
  })
})

router.get("/id/:id", passport.authenticate('jwt', { session: false }),(req, res) => {
  var campaignid = new mongodb.ObjectID(req.params["id"]);
  Campaign.find({"_id": campaignid},function (err, campaigns) {
    if (err) {
      res.send(err);
    } else {
      res.send(campaigns);
    }
  })
})

router.put("/:id", passport.authenticate('jwt', { session: false }),(req, res) => {
  try {
    var campaignid = new mongodb.ObjectID(req.params["id"]);
  } catch(err) {
    console.log(err)
  };
  Campaign.find({"_id": campaignid},function (err, campaign) {
    if (err) {
        res.status(500).send(err);
    } else {
        var campaign = campaign[0];
        campaign.company = req.body.company || campaign.company
        campaign.name = req.body.name || campaign.name
        campaign.company = req.body.company || campaign.company
        campaign.templateId = req.body.templateId || campaign.templateId
        campaign.target = req.body.target || campaign.target
        campaign.startDate = req.body.startDate || campaign.startDate
        campaign.endDate = req.body.endDate || campaign.endDate
        if (req.body.active === true || req.body.active === false) {
          campaign.active = req.body.active
        }
        campaign.log = req.body.log || campaign.log
        campaign.openLog = req.body.openLog || campaign.openLog
        campaign.linkLog = req.body.linkLog || campaign.linkLog

        campaign.save(function (err, campaign) {
            if (err) {
                res.status(500).send(err)
            }
            res.send(campaign);
        });
    }
});
})

router.delete("/:id", passport.authenticate('jwt', { session: false }),(req, res) => {
  var campaignid = new mongodb.ObjectID(req.params["id"]);
  Campaign.find({_id: campaignid}).remove().then(() => {
    console.log("success");
    res.send("success");
  })
})

module.exports = router;
