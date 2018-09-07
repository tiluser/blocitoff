(function () {

    function HomeCtrl($window, Task) {
        this.title = "Blocitoff Application";
        this.tasks = Task.all;
        this.message = function() {
            $window.alert("This is a test");
        };
        this.addTask = function() {
            Task.add();
            $window.alert(Task.taskDate);
        };
    }

    angular
        .module('blocitoff')
        .controller('HomeCtrl', ['$window', 'Task', HomeCtrl]);

})();

