(function () {

    function PastTasksCtrl($window, Task) {
        this.title = "- Completed/Inactive task list";
        this.tasks = Task.all;

        this.cfjsSubmit = function(input) {
            Task.cfjsSubmit(input);
           // $window.alert(input);
        };

        AppSpec.method("doPastTasksTest", function (gsp) {
             alert("Test of defining Creole primitive in the past tasks controlloer");
        });
        cfb1.BuildPrimitive("PTEST", cfb1.Modules.AppSpec.doPastTasksTest, "AppSpec.doPastTasksTest", "APPSPEC", "COMPINPF","( -- ) Test of defining Creole Primitive in the past tasks controller");
    }

    angular
        .module('blocitoff')
        .controller('PastTasksCtrl', ['$window', 'Task', PastTasksCtrl]);

})();

