var mongoose = require('mongoose');

var impactSchema = mongoose.Schema({
    project_id: String,
    lives_affected: Number,
    date_affected: { type: Date, default: Date.now }
});

module.exports = mongoose.model('ImpactPopulation', impactSchema);