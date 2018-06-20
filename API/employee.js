var mongoose = require("mongoose");
var EmployeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    required: false
  },
  email: {
    type: String,
    required: false
  },
  address: {
    type: String,
    required: false
  },
  position: {
    type: String,
    required: false
  },
  admin: {
    type: Boolean,
    required: false,
    default: false
  }
})

var Employee = mongoose.model("Employee", EmployeeSchema);

module.exports = Employee;
