var mongoose = require("mongoose");
var CampaignSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  company: {
    type: String,
    required: true
  },
  templateId: {
    type: String,
    required: true
  },
  target: {
    type: String,
    required: true
  },
  startDate: {
    type: String,
    required: true
  },
  endDate: {
    type: String,
    required: false
  },
  active: {
    type: Boolean,
    required: false,
    default: false
  },
  log: {
    type: Array,
    required: false,
    default: []
  },
  openLog: {
    type: Array,
    required: false,
    default: []
  },
  linkLog: {
    type: Array,
    required: false,
    default: []
  }
})

var Campaign = mongoose.model("Campaign", CampaignSchema);

module.exports = Campaign;
