var MilestoneComment = require("../models/milestoneComment")
var mongoose = require('mongoose');

exports.create_comment = function(req, res) {

    var comment = req.body

    var id = req.params.milestoneId

    var milestoneComment = new MilestoneComment()

    if (comment) {
        milestoneComment.set('milestone_id', id)
        milestoneComment.set('comment', comment.comment)
        milestoneComment.set('author_name', comment.author_name)

        milestoneComment.save(function(err, upcommingComment) {
            var resp = {}

            if (err) {
                resp.status = false
                resp.message = err
                resp.data = null

                res.json(resp)
            } else {
                resp.status = true
                resp.message = "Milestone Comment Created"
                resp.data = milestoneComment

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

    var milestoneId = req.params.milestoneId

    if (milestoneId) {
        var Comment = MilestoneComment
        var resp = {}

        Comment.find({ 'milestone_id': milestoneId }, function(err, comment) {
            if (err) {
                resp.status = false
                resp.message = "Something bad happend"
                resp.data = err
                res.json(resp)
            } else {
                resp.status = true
                resp.message = "Milestone Comment Retrunned"
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