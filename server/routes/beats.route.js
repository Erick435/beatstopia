const BeatController = require("../controllers/beats.controller");

module.exports = app => {
    //CREATE ROUTE (USING POST)
    app.post("/api/beat/create", BeatController.createBeat)

    //READ ALL ROUTE (GET)
    app.get("/api/beats/", BeatController.findAllBeats)

    //READ ONE ROUTE (GET)
    app.get("/api/beat/:_id", BeatController.findBeat)

    //UPDATE ONE ROUTE (PUT)
    app.put("/api/beat/update/:_id", BeatController.updateBeat)

    //DELETE ONE ROUTE (DELETE)
    app.delete("/api/beat/delete/:_id", BeatController.deleteBeat)
    
}