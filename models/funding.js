var mongoose = require('mongoose');

var fundingSchema = mongoose.Schema({
    project_id: String,
    funding_name: String,
    funding_amount: Number,
    funding_cycle: String,
    date_added: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Funding', fundingSchema);