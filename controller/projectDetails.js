const Project = require('../models/project');

module.exports.index = async function(req, res) {
    let project = await Project.findById(req.params.id);
    return res.render('projectDetails', {
        title: 'Project Details',
        project,
        showPopup: false
    });
}

module.exports.showPopup = async function(req, res) {
    let project = await Project.findById(req.params.id);
    return res.render('projectDetails', {
        title: 'Project Details',
        project,
        showPopup: true
    });
}