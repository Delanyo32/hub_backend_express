var MongoClient = require('mongodb').MongoClient

var milestoneCollection = null

MongoClient.connect("mongodb://localhost:27017/cockpitdb", function(err, db) {
    if (err) { return console.dir(err); }

    milestoneCollection = db.collection('collections_milestones5a16e1894a562');

});

exports.get_milestones = function(req, res) {
    var project_short_name = req.params.project_short_name

    if (milestoneCollection) {
        milestoneCollection.find({ "project_short_name": project_short_name }).toArray(function(err, results) {
            var resp = {}
            if (err) {
                resp.status = false
                resp.message = err
                resp.data = null

                res.json(resp)
            } else {
                resp.status = true
                resp.message = "Milestones returned"
                resp.data = results
                res.json(resp)
            }
        })
    }
}