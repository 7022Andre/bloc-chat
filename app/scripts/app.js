(function () {
    function config($stateProvider, $locationProvider) {
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
            });
    }

    function Login($uibModal) {
        $uibModal.open({
            templateUrl: '/templates/login.html',
            controller: 'LoginCtrl as login',
            backdrop: 'static',
            keyboard: false
        });
    }

    angular
        .module('pdx-chat', ['ui.router', 'firebase', 'ui.bootstrap'])
        .config(config)
        .run(['$uibModal', Login]);
})();
