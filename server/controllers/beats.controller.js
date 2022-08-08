const Beat = require("../models/beats.model");

//CREATING A NEW BEAT
module.exports.createBeat = (req, res) => {
    Beat.create(req.body)
        .then(newBeat => res.json(newBeat))
        .catch(err => res.json({message: "Error CREATING a new Beat",
        error: err}))
}

//READING ALL BEATS
module.exports.findAllBeats = (req, res) => {
    Beat.find()
        .then(allBeats => res.json(allBeats))
        .catch(err => res.json({message: "Error FINDING ALL Beats",
        error: err}))
}

//READING ONE BEAT
module.exports.findBeat = (req, res) => {
    Beat.find({_id: req.params._id})
        .then(oneBeat => res.json(oneBeat))
        .catch(err => res.json({message: "Error FINDING ONE Beat",
        error: err}))
}

//UPDATING A SINGLE BEAT
module.exports.updateBeat = (req, res) => {
    Beat.findOneAndUpdate({_id: req.params._id}, req.body)
        .then(update => res.json(update))
        .catch(err => res.json({message: "Error UPDATING a Beat",
        error: err}))
}

//DELETING A SINGLE BEAT
module.exports.deleteBeat = (req, res) => {
    Beat.deleteOne({_id: req.params._id})
        .then(res.json({message: "Beat Deleted"}))
        .catch(err => res.json({message: "Error DELETING a beat",
        error: err}))
}