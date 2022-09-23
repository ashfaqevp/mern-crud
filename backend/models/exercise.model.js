const { Schema, default: mongoose } = require("mongoose");

const excerciseschema = new Schema({
    username: { type :String, required : true },
    description: { type :String, required : true },
    duration: { type :Number, required : true },
    date: { type :Date, required : true },
},
{
    timestamps : true,
}
);

const Exercise = mongoose.model('Exercises', excerciseschema);

module.exports = Exercise;