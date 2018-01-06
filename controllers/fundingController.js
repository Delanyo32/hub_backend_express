var MongoClient = require('mongodb').MongoClient

var fundingCollection = null

MongoClient.connect("mongodb://localhost:27017/cockpitdb", function(err, db) {
    if (err) { return console.dir(err); }

    fundingCollection = db.collection('collections_funding5a12fce4b9f7b');

});

exports.get_funding = function(req, res) {
    var project_short_name = req.params.project_short_name

    if (fundingCollection) {
        fundingCollection.find({ "project_short_name": project_short_name }).toArray(function(err, results) {
            var resp = {}
            if (err) {
                resp.status = false
                resp.message = err
                resp.data = null

                res.json(resp)
            } else {
                resp.status = true
                resp.message = "funding returned"
                resp.data = results
                res.json(resp)
            }
        })
    }
}