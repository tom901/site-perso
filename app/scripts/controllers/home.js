'use strict';

angular.module('app.home', [])
    .controller('HomeCtrl', function ($scope, ProjectService) {
        
        $scope.projects = ProjectService.getProjects();
        // console.log($scope.projects);
        var tmpProjects = $scope.projects;
        // console.log(tmpProjects);

        $scope.setSelectedProject = function(selected) {
         
         $scope.selectedProject = selected;
        }
        // angular.forEach($scope.projects, function(project) {
        //     console.log(project);
        // });
        // console.log($scope.projects);
        $scope.$apply;
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
                barColor: '#858585',
                scaleColor: false,
                lineWidth: 15,
                lineCap: 'circle',
                size : 100
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
                barColor: '#858585',
                scaleColor: false,
                lineWidth: 15,
                lineCap: 'circle',
                size : 100
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
                barColor: '#858585',
                scaleColor: false,
                lineWidth: 15,
                lineCap: 'circle',
                size : 100
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
                barColor: '#858585',
                scaleColor: false,
                lineWidth: 15,
                lineCap: 'circle',
                size : 100
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
                barColor: '#858585',
                scaleColor: false,
                lineWidth: 15,
                lineCap: 'circle',
                size : 100
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
                barColor: '#858585',
                scaleColor: false,
                lineWidth: 15,
                lineCap: 'circle',
                size : 100
            };
        }
    });
