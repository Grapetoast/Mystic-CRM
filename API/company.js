var mongoose = require("mongoose");
var CompanySchema = new mongoose.Schema({
  companyId: {
    type: String,
    required: true
  },
  companyName: {
    type: String,
    required: true
  },
  licenseType: {
    type: String,
    required: false,
    default: 'paid'
  },
  unsubscribeLog: {
    type: Array,
    required: false,
    default: []
  }
})

var Company = mongoose.model("Company", CompanySchema);
module.exports = Company;
