var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var gallerySchema = new Schema({
  name: String,
  count: Number,
  photos: [{
    data: Buffer,
    contentType: String
  }]
});

var Gallery = mongoose.model('Gallery', gallerySchema);

module.exports = Gallery;