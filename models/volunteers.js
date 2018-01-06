var mongoose = require('mongoose');

var volunteerSchema = mongoose.Schema({
    project_id: String,
    volunteer_id: String,
    volunteer_name: String,
    date_added: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Volunteer', volunteersSchema);