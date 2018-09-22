var now = function () {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();

    if(dd<10) {
        dd = '0'+dd;
    } 

    if(mm<10) {
    mm = '0'+mm;
    } 

    return  mm + '/' + dd + '/' + yyyy;
};

(function () {
    function Task($firebaseArray, $window, $filter) {
        var Task = {};    
     //   var ref = $firebaseArray(new Firebase('https://todolist-220d4.firebaseio.com')).child("tasks");   
        var ref = firebase.database().ref().child("tasks");
        var tasks = $firebaseArray(ref);
        Task.ph = "Enter task description here";
        Task.description = "New task";
        Task.all = tasks;
        Task.taskDate = now();
        Task.cfjsSubmit = function (input) {
            cfjsSubmit(input);
            console.log("This is a test");
        };

        Task.doit = function (taskId) {
            console.log(taskId);
        };
      
        Task.addOld = function () {
            tasks.$add({ description: Task.description, taskDate: Task.taskDate, taskPriority: 3, status: "A" });
        };

        Task.add = function (description, taskPriority) {
            tasks.$add({ description: description, taskDate: Task.taskDate, taskPriority: taskPriority, status: "A" });
        };

        AppSpec.method("doDetermineTaskStatus", function (gsp) {
         //   if (gsp.hasMinArgs(gsp.DataStack, 3) === false) { 
         //       return;
        //    }
            var days = gsp.DataStack.pop();  
            var taskDate = gsp.DataStack.pop();     
            var currStatus = gsp.DataStack.pop();

            console.log("Days is " + days);
            console.log("taskDate is " + taskDate);
            console.log("currStatus is " + currStatus);

            var newStatus;

            var dateComp = taskDate.split("/");
            var rawDate = new Date(dateComp[2],dateComp[0] - 1, dateComp[1]);
            var dateDiff = Date.now() - rawDate;

            var msInDay = 86400 * 1000;
            var timeWindow = days * msInDay;
    
            if ((dateDiff > timeWindow) && (currStatus === 'A')) {
                newStatus = 'I';
             }
            else {
                newStatus = currStatus;
            }
            gsp.DataStack.push(newStatus);                            
        });

        cfb1.BuildPrimitive("DTASKSTAT", cfb1.Modules.AppSpec.doDetermineTaskStatus, "AppSpec.doDetermineTaskStatus", 
            "APPSPEC", "COMPINPF","( currstatus taskDate expireDays -- newstatus ) Status of I returned if not complete and past expire period");

        // If task is active and past the expireDays window, it's set to inactive. Otherwise status is same as before. 
        Task.condExpireTask = function(task) {
            var currStatus = task.status;
            var taskDate = task.taskDate;
            var expireDays = 5;
            cfjsSubmit(currStatus + " " + taskDate + " " + expireDays + " DTASKSTAT");
            task.status = gsp.DataStack.pop();
            tasks.$save(task);
        };

         // Sets the task status to 'C' 
        Task.completeTask = function(task) {
             task.status = 'C'
            tasks.$save(task);
        };


        return Task;
    }
    angular
        .module('blocitoff')
        .factory('Task', ['$firebaseArray', '$window','$filter', Task]);
})();
