'use strict';

angular.module('app.home', [])
    .controller('HomeCtrl', function ($scope) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        circleAngularJs();
        circleApexSalesforce();
        circleHtmlCss();
        circleJava();
        circleJavaScript();
        circleNodeJs();


        function circleAngularJs() {
            $scope.percentAngularJs = 80;
            $scope.optionsAngularJs = {
                animate: {
                    duration: 10000,
                    enabled: true
                },
                trackColor: '#C7C7C7',
                barColor: '#6C97E5',
                scaleColor: false,
                lineWidth: 20,
                lineCap: 'circle'
            };
        }

        function circleJava() {
            $scope.percentJava = 70;
            $scope.optionsJava = {
                animate: {
                    duration: 10000,
                    enabled: true
                },
                trackColor: '#C7C7C7',
                barColor: '#6C97E5',
                scaleColor: false,
                lineWidth: 20,
                lineCap: 'circle'
            };
        }

        function circleJavaScript() {
            $scope.percentJavaScript = 60;
            $scope.optionsJavaScript = {
                animate: {
                    duration: 10000,
                    enabled: true
                },
                trackColor: '#C7C7C7',
                barColor: '#6C97E5',
                scaleColor: false,
                lineWidth: 20,
                lineCap: 'circle'
            };
        }

        function circleApexSalesforce() {
            $scope.percentApex = 75;
            $scope.optionsApex = {
                animate: {
                    duration: 10000,
                    enabled: true
                },
                trackColor: '#C7C7C7',
                barColor: '#6C97E5',
                scaleColor: false,
                lineWidth: 20,
                lineCap: 'circle'
            };
        }

        function circleHtmlCss() {
            $scope.percentHtmlCss = 90;
            $scope.optionsHtmlCss = {
                animate: {
                    duration: 10000,
                    enabled: true
                },
                trackColor: '#C7C7C7',
                barColor: '#6C97E5',
                scaleColor: false,
                lineWidth: 20,
                lineCap: 'circle'
            };
        }

        function circleNodeJs() {
            $scope.percentNodeJs = 55;
            $scope.optionsNodeJs = {
                animate: {
                    duration: 10000,
                    enabled: true
                },
                trackColor: '#C7C7C7',
                barColor: '#6C97E5',
                scaleColor: false,
                lineWidth: 20,
                lineCap: 'circle'
            };
        }
    });
