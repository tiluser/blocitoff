(function () {

    function HomeCtrl($window, Task) {
        this.title = "Blocitoff Application";
        this.tasks = Task.all;
        this.message = function(msg) {
            $window.alert(msg);
        };
        this.addTask = function(description, priority) {
         //   Task.add();
            Task.add(description, priority);
            $window.alert("Task added");
           // $window.alert(Task.taskDate);
        };

        // Set task to 'E' or expired if it's past expiration date
        this.condExpireTask = function(taskId) {
            Task.condExpireTask(taskId);
        };

        this.cfjsSubmit = function(input) {
            Task.cfjsSubmit(input);
           // $window.alert(input);
        };

        AppSpec.method("doHomeTest", function (gsp) {
             alert("Test of defining Creole primitive in a controlloer");
        });
        cfb1.BuildPrimitive("HTEST", cfb1.Modules.AppSpec.doHomeTest, "AppSpec.doHomeTest", "FORTH", "COMPINPF","( -- ) Test of defining Creole Primitive in a controller");
        this.doit = function (taskId) {
            Task.doit(taskId);
        };
        // at the bottom of your controller
        var init = function () {   
         //   Task.doit();
        };
        // and fire it after definition
        init();
    }

    angular
        .module('blocitoff')
        .controller('HomeCtrl', ['$window', 'Task', HomeCtrl]);

})();

