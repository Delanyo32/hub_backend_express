var express = require('express');
var router = express.Router();

var project_controller = require('../controllers/projectController')
var milestone_comment_controller = require('../controllers/milestoneCommentController')
var upcomming_comment_controller = require('../controllers/upcommingCommentController')
var milestone_controller = require('../controllers/milestoneController')
var upcomming_controller = require('../controllers/upcommingController')
var funding_controller = require('../controllers/fundingController')
var impact_controller = require('../controllers/impactController')
var volunteer_controller = require('../controllers/volunteersController')


//project routes
router.get('/project/:projectId', project_controller.get_project)

router.get('/project', project_controller.get_projects)

//upcommingComments routes
router.post('/upcommingComments/:upcommingId', upcomming_comment_controller.create_comment)

router.get('/upcommingComments/:upcommingId', upcomming_comment_controller.get_comments)

//milestoneComments routes
router.post('/milestoneComments/:milestoneId', milestone_comment_controller.create_comment)

router.get('/milestoneComments/:milestoneId', milestone_comment_controller.get_comments)

//milestone routes
router.get('/milestone/:project_short_name', milestone_controller.get_milestones)

//upcomming routes
router.get('/upcomming/:project_short_name', upcomming_controller.get_upcomming)

//funding routes
router.get('/funding/:project_short_name', funding_controller.get_funding)


//impact routes
router.get('/impact/:project_short_name', impact_controller.get_impact_over_time)

//volunteers routes
router.get('/volunteers/:project_short_name', volunteer_controller.get_volunteers_over_time)

module.exports = router;