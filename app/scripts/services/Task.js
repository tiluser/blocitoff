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
    function Task($firebaseArray, $window) {
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

        Task.doit = function () {
            alert();
        };
      
        Task.addOld = function () {
            tasks.$add({ description: Task.description, taskDate: Task.taskDate, taskPriority: 3, status: "A" });
        };

        Task.add = function (description, taskPriority) {
            tasks.$add({ description: description, taskDate: Task.taskDate, taskPriority: taskPriority, status: "A" });
        };


        return Task;
    }
    angular
        .module('blocitoff')
        .factory('Task', ['$firebaseArray', '$window', Task]);
})();
