var ProjectsView = function() {
    var self = this;
    self.activeProjects = ko.observableArray([]);
    self.inactiveProjects = ko.observableArray([]);
    self.projects = ko.computed(function() {
        return self.activeProjects().concat(self.inactiveProjects());
    });
    self.addProject = function(project) {
        if (project.status() === 1) {
            self.activeProjects.push(project);
        } else if (project.status() === 0) {
            self.inactiveProjects.push(project);
        } else if (project.status() === -1) {
            // this is a hidden project, do nothing
        } else {
            // bad status
            return undefined;
        }
        return self.projects();
    }
}

$(document).ready(function load() {
    var self = this;
    // alias Project
    var Project = sjb9774.home.Project;
    var myProjectsView = new ProjectsView();
    $.get('/api/get/projects', '', function success(response) {
        var response = JSON.parse(response);
        for (var i = 0; i < response.length; i++) {
            var obj = response[i];
            myProjectsView.addProject(new Project(obj['name'], obj['status']));
        }
        ko.applyBindings(myProjectsView);

        $('.project.wrapper:not(.disabled)').hover(function hoverIn(event) {
            var element = event.target;
            if (!$(element).data('naturalHeight')) {
                $(element).data('naturalHeight', $(element).height());
            }
            $(element).stop();
            $(element).animate({'height': 200}, {'duration': 500});
        }, function hoverOut(event) {
            var element = event.target;
            $(element).stop();
            $(element).animate({'height': $(element).data('naturalHeight')},
                               {'duration': 200});
        });
    });

})
