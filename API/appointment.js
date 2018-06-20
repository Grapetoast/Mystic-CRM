var mongoose = require("mongoose");
var AppointmentSchema = new mongoose.Schema({
  company: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  date: {
    month: {
      type: String,
      required: true
    },
    day: {
      type: String,
      required: true
    },
    year: {
      type: String,
      required: true
    },
    dayString: {
      type: String,
      required: true
    }
  },
  time: {
    timeStart: {
      type: String,
      required: true
    },
    timeEnd: {
      type: String,
      required: true
    }
  },
  description: {
    type: String,
    required: false
  }
})

var Appointment = mongoose.model("Appointment", AppointmentSchema);
module.exports = Appointment;
