var client = require('../repositories/elasticsearch')

exports.get_impact_over_time = function(req, res) {

    var project_short_name = req.params.project_short_name
    var resp = {}

    client.search({
        index: 'impact',
        body: {
            query: {
                match: { project_short_name: project_short_name }
            },
            aggs: {
                impact_over_time: {
                    date_histogram: {
                        field: "impact_date",
                        interval: "month"
                    },
                    aggs: {
                        impact_total: {
                            sum: {
                                field: "impact_number"
                            }
                        }
                    }
                }
            }
        }

    }, function(error, response) {
        if (error) {
            resp.status = true
            resp.message = "Impact not returned"
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