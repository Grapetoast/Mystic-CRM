var mongoose = require("mongoose");
var LinkSchema = new mongoose.Schema({
  company: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  }
})

var Link = mongoose.model("Link", LinkSchema);

module.exports = Link;
