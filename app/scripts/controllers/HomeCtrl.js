(function () {

    function HomeCtrl($window, Task) {
        this.title = "- Home page";
        this.tasks = Task.all;
        this.addTask = function(description, priority) {
            Task.add(description, priority);
            $window.alert("Task added");
        };

        // Set task to 'I' or inactive if it's past expiration date
        this.condExpireTask = function(task) {
            Task.condExpireTask(task);
        };

        this.completeTask = function(task) {
            Task.completeTask(task);
        };

        this.cfjsSubmit = function(input) {
            Task.cfjsSubmit(input);
        };

        AppSpec.method("doHomeTest", function (gsp) {
             alert("Test of defining Creole primitive in a controlloer");
        });
        cfb1.BuildPrimitive("HTEST", cfb1.Modules.AppSpec.doHomeTest, "AppSpec.doHomeTest", "FORTH", "COMPINPF","( -- ) Test of defining Creole Primitive in a controller");
    }

    angular
        .module('blocitoff')
        .controller('HomeCtrl', ['$window', 'Task', HomeCtrl]);

})();

