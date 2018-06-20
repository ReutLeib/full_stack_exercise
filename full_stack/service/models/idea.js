var mongoose  = require('mongoose'),
    idea      = new mongoose.Schema({
        id:{
          type: Number,
          index: 1
        },
        idea: String,
        group: String

    });

var Idea = mongoose.model('Idea', idea);
module.exports = Idea;