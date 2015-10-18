'use strict';

angular.module('myApp', ['easypiechart','app.home','app.blog','app.tuto','ui.router', 'app.testCode','ui.bootstrap'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/home");
        $stateProvider
            .state('home', {
                url: "/home",
                templateUrl: "views/home.html",
                controller:'HomeCtrl'
            })
            .state('tuto', {
                url: "/tuto",
                templateUrl: "views/tuto.html",
                controller:'TutoCtrl'
            })
            .state('blog', {
                url: "/blog",
                templateUrl: "views/blog.html",
                controller:'TutoCtrl'
            })
          .state('test', {
            url: "/test",
            templateUrl: "views/test.html",
            controller:'TestCtrl'
          })
    });
