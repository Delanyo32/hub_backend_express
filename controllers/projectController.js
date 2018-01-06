var MongoClient = require('mongodb').MongoClient
var mongo = require('mongodb');

var projectCollection = null

MongoClient.connect("mongodb://localhost:27017/cockpitdb", function(err, db) {
    if (err) { return console.dir(err); }

    projectCollection = db.collection('collections_Projects5a12f619858a9');

});

exports.get_project = function(req, res) {

    var project_id = req.params.projectId

    if (projectCollection) {

        var o_id = new mongo.ObjectID(project_id);
        projectCollection.find({ "_id": o_id }).toArray(function(err, results) {

            var resp = {}
            if (err) {
                resp.status = false
                resp.message = err
                resp.data = null

                res.json(resp)
            } else {
                resp.status = true
                resp.message = "project returned"
                resp.data = results[0]
                res.json(resp)
            }
        })
    }
}

exports.get_projects = function(req, res) {

    var resp = {}
    if (projectCollection) {

        projectCollection.find({}).toArray(function(err, results) {

            //var resp = {}
            if (err) {
                resp.status = false
                resp.message = err
                resp.data = null

                res.json(resp)
            } else {
                resp.status = true
                resp.message = "projects returned"
                resp.data = results
                res.json(resp)
            }
        })
    }else {
        resp.status = false
        resp.message = err
        resp.data = null

        res.json(resp)
    }
}