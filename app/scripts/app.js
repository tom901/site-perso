'use strict';
angular.module('app', ['easypiechart','app.instagramService','app.home', 'app.blog', 'app.tuto', 'ui.router',
                         'app.testCode', 'ui.bootstrap', 'app.projectService', 'app.projectDetail',
                         'app.instagram']).config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/home");
    $stateProvider.state('home', {
        url: "/home",
        templateUrl: "views/home.html",
        controller: 'HomeCtrl'
    }).state('tuto', {
        url: "/tuto",
        templateUrl: "views/tuto.html",
        controller: 'TutoCtrl'
    }).state('blog', {
        url: "/blog",
        templateUrl: "views/blog.html",
        controller: 'TutoCtrl'
    }).state('projectDetail', {
        url: "/projectDetail",
        templateUrl: "views/projectDetail.html",
        controller: 'ProjectDetailCtrl'
    }).state('instagram', {
        url: "/instagram",
        templateUrl: "views/instagram.html",
        controller: 'InstagramCtrl'
    }).state('test', {
        url: "/test",
        templateUrl: "views/test.html",
        controller: 'TestCtrl'
    })
});