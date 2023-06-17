const Project = require('../models/project');

module.exports.index = async function(req, res) {

    let project = await Project.findById(req.params.id)
    .populate('issue');
    console.log('*************',project.issue);
    return res.render('projectDetails', {
        title: 'Project Details',
        project,
        showPopup: false,
        filteredIssues: []
    });
}

module.exports.showPopup = async function(req, res) {
    
    let project = await Project.findById(req.params.id)
    .populate('issue');
    return res.render('projectDetails', {
        title: 'Project Details',
        project,
        showPopup: true,
        filteredIssues: []
    });
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
      } else if (filterOption === 'Description') {
        filteredIssues = filteredIssues.sort((a, b) => a.description.localeCompare(b.description));
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