(function() {
    'use strict';

    /**
     * @ngdoc Config
     * @name ResumeRoute
     * @module app.resume
     * @description
     *
     *
     * @author Ideas2IT Technologies
     * @copyright
     */
    angular
        .module('app.resume')
        .config(config);
        config.$inject = [
            '$stateProvider',
            '$urlRouterProvider'
        ];

    function config ($stateProvider,$urlRouterProvider) {
       $urlRouterProvider.otherwise("/");

        $stateProvider
            .state('resume', {
                url: '/',
                templateUrl: 'app/resume/views/resume.html',
                controller:'ResumeController',
                controllerAs: 'resumCtrl'

            });
    }

}());
