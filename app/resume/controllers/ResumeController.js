(function() {
    'use strict';
    /**
      * @author Gowthaman
      */
    angular
        .module('app.resume')
        .controller('ResumeController', ResumeController);

    ResumeController.$inject = [];

    /* @ngInject */
    function ResumeController( ) {
        var vm = this;


      vm.showDarkTheme  = true;
    }
})();
