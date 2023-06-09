const Project = require('../models/project');

module.exports.index = async function(req, res){

    let item = await Project.find({});

    return res.render('home', {
        title: 'ISSUE TRACKER HOME',
        project: item
    });
}