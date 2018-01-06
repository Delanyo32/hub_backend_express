var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var milestoneSchema = new Schema({
    description: String,
    project_id: String,
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Milestone', milestoneSchema);