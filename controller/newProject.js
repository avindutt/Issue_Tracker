const Project = require('../models/project');

module.exports.index = async function(req, res){
    let project = await Project.create({
        name: req.body.name,
        description: req.body.description,
        author: req.body.author
    });

    console.log('********', project);

    return res.redirect('back');
}