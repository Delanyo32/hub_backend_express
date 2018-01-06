var mongoose = require('mongoose');

var upcommingCommentSchema = mongoose.Schema({
    author_name: String,
    comment: String,
    upcomming_id: String

});

module.exports = mongoose.model('UpcommingComment', upcommingCommentSchema);