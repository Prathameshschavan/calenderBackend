const mongoose = require('mongoose');


let schema = mongoose.Schema({
    id:Number,
    title:String,
    description: String,
    type: String,
    duration: Number
});

let Data = mongoose.model("studentCourse", schema);

module.exports = Data;