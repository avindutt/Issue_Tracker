const Issue = require('../models/issue');
const Project = require('../models/project');

module.exports.index = async function(req, res){

    let project = await Project.findById(req.body.project);

    const labels = Object.keys(req.body)
    .filter(key => key !== 'title' && key !== 'description' && key !== 'author');

    if(project){
        let issue = await Issue.create({
            title: req.body.title,
            description: req.body.description,
            labels,
            author: req.body.author,
            project: req.body.project
        });

            project.issue.push(issue);
            project.save();

            return res.redirect('back');
    }

}