var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var eventSchema = new Schema({
  name: String,
  url: String,
  phoneNumber: String
});

var Link = mongoose.model('Link', eventSchema);

module.exports = Link;
