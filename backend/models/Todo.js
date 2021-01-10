const mongoose = require('mongoose');

const todo = {
    id : String,
    text : String,
    status : String,
    bucket : String
}

const todoData = new mongoose.Schema({
    todo:{type: [todo], required: true},
    bucketList:{type: [String], required: true},
    idCounter:{type: Number, required: false} 
});

module.exports = Post = mongoose.model("todoData", todoData);