var mongoose = require('mongoose'),
  Subcontractor = require('./../subcontractor/subcontractor.model.js'),
  Event = require('./../event/event.model.js'),
  Schema = mongoose.Schema;

var customerSchema = new Schema({
  phoneNumber: Number,
  subcontractor: [{type: mongoose.Schema.Types.ObjectId, ref: 'Subcontractor'}],
  budget: {
    total: Number
  },
  events: [{type: mongoose.Schema.Types.ObjectId, ref: 'Event'}]
});

var Customer = mongoose.model('Costumer', customerSchema);

module.exports = Customer;


  