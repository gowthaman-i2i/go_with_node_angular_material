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
        ];

    function config ($stateProvider) {

        $stateProvider
            .state('resume', {
                url: '/',
                templateUrl: '/resume/views/resume.html'

            });
    }

}());
