var mongoose = require('mongoose');

//genre schema
var genreSchema = mongoose.Schema({
  name:{
    type: String,
    required: true
  },
  creat_date:{
    type: Date,
    default: Date.now
  }
});

var Genre = module.exports = mongoose.model('Genre', genreSchema);

//Get genreSchema
module.exports.getGenres= funtion(callback, limit){
  Genre.find(callback).limit(limit);
}

//add genres
module.exports.addGenre= funtion(genre, callback){
  Genre.create(genre, callback);
}
