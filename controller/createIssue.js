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


module.exports.filterIssues = async function(req, res) {
    const projectId = req.params.id;
    const filterOption = req.query.filter;
  
    try {
      const project = await Project.findById(projectId).populate('issue');
  
      let filteredIssues = project.issue;
  
      if (filterOption === 'Title') {
        filteredIssues = filteredIssues.sort((a, b) => a.title.localeCompare(b.title));
      } else if (filterOption === 'Author') {
        filteredIssues = filteredIssues.sort((a, b) => a.author.localeCompare(b.author));
      }
  
      res.render('projectDetails', {
        project: project,
        showPopup: false,
        filteredIssues: filteredIssues
      });
    } catch (err) {
      console.error(err);
      // Handle error and redirect if necessary
    }
  };