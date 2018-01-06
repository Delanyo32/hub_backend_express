var UpcommingComment = require("../models/upcommingComment")

var mongoose = require('mongoose');

exports.create_comment = function(req, res) {

    var comment = req.body

    var id = req.params.upcommingId

    var upcommingComment = new UpcommingComment()

    if (comment) {
        upcommingComment.set('upcomming_id', id)
        upcommingComment.set('comment', comment.comment)
        upcommingComment.set('author_name', comment.author_name)

        upcommingComment.save(function(err, upcommingComment) {
            var resp = {}

            if (err) {
                resp.status = false
                resp.message = err
                resp.data = null

                res.json(resp)
            } else {
                resp.status = true
                resp.message = "Upcomming Comment Created"
                resp.data = upcommingComment

                res.json(resp)
            }
        })

    } else {

        resp.status = false
        resp.message = "No body provided"
        resp.data = null
        res.json(resp)
    }
}


exports.get_comments = function(req, res) {

    var upcommingId = req.params.upcommingId

    if (upcommingId) {
        var Comment = UpcommingComment
        var resp = {}

        Comment.find({ 'upcomming_id': upcommingId }, function(err, comment) {
            if (err) {
                resp.status = false
                resp.message = "Something bad happend"
                resp.data = err
                res.json(resp)
            } else {
                resp.status = true
                resp.message = "Upcomming Comments Retrunned"
                resp.data = comment

                res.json(resp)
            }
        })
    } else {
        resp.status = false
        resp.message = "Upcomming Id not available"
        resp.data = null
        res.json(resp)
    }
}