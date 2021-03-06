(function() {
    function config($locationProvider, $stateProvider, $urlRouterProvider) {
         $locationProvider
             .html5Mode({
                 enabled: true,
                 requireBase: false
              });
 
         $stateProvider
             .state('home', {
                 url: '/',
                 controller: 'HomeCtrl as home',
                 templateUrl: '/templates/home.html'
             })
              .state('pasttasks', {
                url: '/pasttasks',
                controller: 'PastTasksCtrl as pasttasks',
                templateUrl: '/templates/pasttasks.html'
             });
     }
 
     angular
         .module('blocitoff', ['ui.router', 'firebase'])
         .config(config);
 })();

