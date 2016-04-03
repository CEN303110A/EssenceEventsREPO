var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var eventSchema = new Schema({
  type: String,
  name: String,
  url: String,
  phoneNumber: String,
  photo: String
});

var Link = mongoose.model('Link', eventSchema);

module.exports = Link;
