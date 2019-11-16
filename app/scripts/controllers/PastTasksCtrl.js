(function () {

    function PastTasksCtrl($window, Task) {
        this.title = "- Completed/Inactive task list";
        this.tasks = Task.all;

        this.cfjsSubmit = function(input) {
            Task.cfjsSubmit(input);
           // $window.alert(input);
        };

        that = this;

        AppSpec.method("doPastTasksTest", function (gsp) {
             alert("Test of defining Creole primitive in the past tasks controller");
        });

        AppSpec.method("doMostRecentCompletedTask", function (gsp) {
            mrt = that.tasks[that.tasks.length - 1];
            gsp.DataStack.push(mrt);
        });
        
        AppSpec.method("doShow", function (gsp) {
            if (gsp.hasMinArgs(gsp.DataStack, 1) === false) { 
                alert("Stack error");
                return;
            }   
             var mrt = gsp.DataStack.pop();
             alert("This is your most recent completed task : " + mrt.description + " on " +  mrt.taskDate);
        });

        cfb1.BuildPrimitive("PTEST", cfb1.Modules.AppSpec.doPastTasksTest, "AppSpec.doPastTasksTest", "APPSPEC", "COMPINPF",
            "( -- ) Test of defining Creole Primitive in the past tasks controller");
    
        cfb1.BuildPrimitive("MRT", cfb1.Modules.AppSpec.doMostRecentCompletedTask, "AppSpec.doMostRecentCompletedTask", "APPSPEC","COMPINPF", 
        "( -- lctask ) Last completed task)");
        
        cfb1.BuildPrimitive("SHOW", cfb1.Modules.AppSpec.doShow, "AppSpec.doShow", "APPSPEC","COMPINPF", 
        "( task -- ) Pops up alert box of showing task description and time)");

        cfb1.BuildHighLevel(gsp, ": MRTS MRT SHOW ;", "( -- ) Shows the most recent task");
    }

    angular
        .module('blocitoff')
        .controller('PastTasksCtrl', ['$window', 'Task', PastTasksCtrl]);

})();

