var schedule = require('node-schedule');
var mongoose = require('mongoose');
var MongoClient = require('mongodb').MongoClient
var client = require('../repositories/elasticsearch')

var rule = new schedule.RecurrenceRule();

rule.minute = new schedule.Range(0, 59, 1);

var data = null

var volunteerCollection = null
var impactCollection = null

MongoClient.connect("mongodb://localhost:27017/cockpitdb", function(err, db) {
    if (err) { return console.dir(err); }

    volunteerCollection = db.collection('collections_volunteers5a169af3e2d8d');
    impactCollection = db.collection('collections_impact5a16c54fcd185')

});

schedule.scheduleJob(rule, function() {
    //console.log(rule);

    client.ping({
        requestTimeout: 30000,
    }, function(error) {
        if (error) {
            console.error('elasticsearch cluster is down!');
        } else {
            console.log('All is well');
        }
    });




    if (impactCollection) {
        impactCollection.find().toArray(function(err, r) {
            // console.log("res", r)

            r.forEach(element => {
                element.id = element._id
                delete element._id

                element.impact_number = Number(element.impact_number)


                client.index({
                    index: 'impact',
                    type: 'impact',
                    id: element.id.toString(),
                    body: {
                        impact_date: element.impact_date,
                        impact_number: element.impact_number,
                        description: element.description,
                        project_short_name: element.project_short_name
                    }
                }, function(err, resp) {
                    if (err) { console.log(err) }
                    //console.log(resp)
                });




            })
        })
    }

    if (volunteerCollection) {
        volunteerCollection.find().toArray(function(err, r) {
            // console.log("res", r)

            r.forEach(element => {
                element.id = element._id
                delete element._id


                client.index({
                    index: 'volunteers',
                    type: 'volunteers',
                    id: element.id.toString(),
                    body: element
                }, function(err, resp) {
                    if (err) { console.log(err) }
                    //console.log(resp)
                });
            })
        })
    }

    console.log('Updated');
})