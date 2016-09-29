angular
  .module('app', ['ui.router'])
  .config(function ($stateProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'views/home.html',
        controller: 'GeneralController'
      })
      .state('home.notifications', {
        url: 'notifications',
        templateUrl: 'views/home/notifications.html',
        controller: 'GeneralController'
      })
      .state('home.timeline', {
        url: 'timeline',
        templateUrl: 'views/home/timeline.html',
        controller: 'GeneralController'
      })
      .state('home.user', {
        url: 'user',
        templateUrl: 'views/home/user.html',
        controller: 'GeneralController'
      })
  })
