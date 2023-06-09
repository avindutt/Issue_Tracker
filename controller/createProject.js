module.exports.index = function(req, res){
    return res.render('createProject', {
        title: 'Create Project'
    });
}