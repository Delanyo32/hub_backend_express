var elasticsearch = require('elasticsearch');
var mongoose = require('mongoose');

var elasticClient = new elasticsearch.Client({
    host: 'localhost:9200',
    log: 'info'
});

module.exports = elasticClient