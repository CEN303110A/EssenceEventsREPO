var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var subcontractorSchema = new Schema({
  name: String,
  link: String
});

var Subcontractor = mongoose.model('Subcontractor', subcontractorSchema);

module.exports = Subcontractor;