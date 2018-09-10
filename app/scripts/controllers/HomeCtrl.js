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

        this.cfjsSubmit = function(input) {
            Task.cfjsSubmit(input);
           // $window.alert(input);
        };

    }

    angular
        .module('blocitoff')
        .controller('HomeCtrl', ['$window', 'Task', HomeCtrl]);

})();

