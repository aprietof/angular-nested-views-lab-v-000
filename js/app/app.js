angular
  .module('app', ['ui.router'])
  .config(function ($stateProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'views/home.html',
        controller: 'AppController'
      })
      .state('home.notifications', {
        url: '/notifications',
        templateUrl: 'views/home/notifications.html',
        controller: 'AppController'
      })
      .state('home.timeline', {
        url: '/timeline',
        templateUrl: 'views/home/timeline.html',
        controller: 'AppController'
      })
      .state('home.user', {
        url: '/user',
        templateUrl: 'views/home/user.html',
        controller: 'AppController'
      })
  })
