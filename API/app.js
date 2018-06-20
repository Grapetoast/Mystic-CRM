var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require('mongoose');
var port = 81;
var app = express();
var router = express.Router();
var path = __dirname + "/views/";
require("./user");
var users = require("./users.js");
require("./company");
var companys = require("./companys.js");
require("./lead");
var leads = require("./leads.js");
require("./employee");
var employees = require("./employees.js");
require("./appointment");
var appointments = require("./appointments.js");
require("./campaign");
var campaigns = require("./campaigns.js");
require("./template");
var templates = require("./templates.js");
require("./link");
var links = require("./links.js");
var images = require("./images.js");

mongoose.Promise = global.Promise;

mongoose.connect("mongodb://user:123@ds123790.mlab.com:23790/mystic-crm", {
  useMongoClient: true
}, function (error) {
  console.log(error);
})

app.use(bodyParser.json());
app.use(express.static(path));
app.use("/",router);

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization")
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS')
  next()
})


app.use("/images", images);
app.use("/companys", companys);
app.use("/leads", leads);
app.use("/employees", employees);
app.use("/templates", templates);
app.use("/appointments", appointments);
app.use("/campaigns", campaigns);
app.use("/users", users);
app.use("/links", links);

router.get("/", (req,res) => {
  res.sendFile(path + "index.html");
})

app.listen(port, () => {
  console.log("Live at Port " + port);
})

router.use( (req,res,next) => {
  console.log("/" + req.method);
  next();
})

app.use("*", (req,res) => {
  res.sendFile(path + "404.html");
})
