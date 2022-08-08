const mongoose = require("mongoose");

const BeatSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Must have a Title"],
        minlength: [2, "Must be more than 2 characters"]
    },
    artist: {
        type: String,
        required: [true, "Must input name of artist/band"],
        minlength: [2, "Must be more than 2 characters"]
    },
    genre: {
        type: String,
        required: [true, "Must input a Genre"],
        minlength: [3, "Must be more than 2 characters"]
    }, 
    cover: {
        type: String,
    },
    video: {
        type: String
    }
}, {timestamps: true})

const Beat = mongoose.model("Beat", BeatSchema);

module.exports = Beat;