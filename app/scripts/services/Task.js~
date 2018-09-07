var now = function () {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();

    if(dd<10) {
        dd = '0'+dd
    } 

    if(mm<10) {
    mm = '0'+mm
    } 

    return  mm + '/' + dd + '/' + yyyy;
};

(function () {
    function Task($firebaseArray) {
        var Task = {};        
        var ref = firebase.database().ref().child("tasks");
        var tasks = $firebaseArray(ref);
        Task.ph = "Enter task description here";
        Task.description = "New task";
        Task.defaultPriority = 3;
        Task.all = tasks;
        Task.taskDate = now();
      
        Task.add = function () {
            tasks.$add({ description: Task.description, taskDate: Task.taskDate, priority: Task.priority, status: "A" });
        };

        return Task;
    }
    angular
        .module('blocitoff')
        .factory('Task', ['$firebaseArray', Task]);
})();
