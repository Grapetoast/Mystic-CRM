var mongoose = require("mongoose");
var SurveySchema = new mongoose.Schema({
  company: {
    type: String,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  questions: [{
    question: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    }
    answers: {
      type: Array,
      required: true
    },
    selectedAnswer: {
      type: String,
      required: false
    }
  }],
  results: [{
    lead: {
      type: String,
      required: false
    },
    answers: [{
      question: {
        type: Array,
        required: false
      },
      answer: {
        type: String,
        required: false
      }
    }]
  }]
})

var Survey = mongoose.model("Survey", SurveySchema);
module.exports = Survey;
