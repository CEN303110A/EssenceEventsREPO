var mongoose = require('mongoose'),
  Subcontractor = require('./../subcontractor/subcontractor.model.js'),
  Event = require('./../event/event.model.js'),
  Schema = mongoose.Schema;

var customerSchema = new Schema({
  phoneNumber: Number,
  subcontractor: [Subcontractor],
  budget: {
    total: Number
  },
  events: [Event]
});

var Customer = mongoose.model('Costumer', customerSchema);

module.exports = Customer;


  