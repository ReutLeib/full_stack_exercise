const mongoose = require('mongoose'); 
var Idea       = require('../models/idea'); //access the MODEL

//for route /final-ideas/getAllIdeas 
exports.getData = function(req, res) { 
  Idea.find({},   (err, docs) => {      
    if (err) console.log(`query error: ${err}`);      
    console.log(docs);      
    res.json(docs);      
    return;    
  }); 
}