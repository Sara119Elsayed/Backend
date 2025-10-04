const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    properities: {
            id:String,
            author:String,
            image:String,
            name:String,
            pageCount:String,
            price:String,
            publisher:String,
            title:String,
    },

});

module.exports = mongoose.model('books', bookSchema);