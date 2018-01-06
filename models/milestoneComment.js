var mongoose = require('mongoose');

var milestoneCommentSchema = mongoose.Schema({
    author_name: String,
    comment: String,
    milestone_id: String
});

module.exports = mongoose.model('MilestoneComment', milestoneCommentSchema);