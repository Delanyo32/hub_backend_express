var client = require('../repositories/elasticsearch')

exports.get_volunteers_over_time = function(req, res) {

    var project_short_name = req.params.project_short_name
    var resp = {}

    client.search({
        index: 'volunteers',
        body: {
            query: {
                match: { project_short_name: project_short_name }
            },
            aggs: {
                volunteers_over_time: {
                    date_histogram: {
                        field: "date_added",
                        interval: "month"
                    }
                }
            }
        }

    }, function(error, response) {
        if (error) {
            resp.status = true
            resp.message = "volunteers not returned"
            resp.data = results
            res.json(resp)
        } else {
            resp.status = true
            resp.message = "impact returned"
            resp.data = response.aggregations
            res.json(resp)
        }

    });


}