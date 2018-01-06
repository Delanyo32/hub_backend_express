var mongoose = require('mongoose');

var projectSchema = mongoose.Schema({
    project_name: String,
    town: String,
    region: String,
    country: String,
    longitude: String,
    latitude: String,
    brief_description: String,
    commencement_date: String,
    completion_date: String,
    primary_activity: String,
    impact_sectors: [String],

});

module.exports = mongoose.model('Project', projectSchema);