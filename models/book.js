var mongoose = require('mongoose');

//genre schema
var bookSchema = mongoose.Schema({
  title:{
    type: String,
    required: true
  },
  genre: {
    type: String,
    required: true
  },
  description: {
    type: String,
  },
  author: {
    type: String,
    required: true
  },
  publisher: {
    type: String,
  },
  pages: {
    type: String,
  },
  image_url: {
    type: String,
  },
  buy_url: {
    type: String,
  },
  creat_date:{
    type: Date,
    default: Date.now
  }
});

var Genre = module.exports = mongoose.model('Books', bookSchema);

//Get Books
module.exports.getBooks= funtion(callback, limit){
  Books.find(callback).limit(limit):
}

//Get Book
module.exports.getBookById= funtion(id, callback){
  Books.findById(id, callback):
}

//add Book
module.exports.addBook= funtion(book, callback){
  Book.create(genre, callback);
}
