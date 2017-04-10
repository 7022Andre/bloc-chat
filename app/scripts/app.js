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

    function LoginPopup() {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider);
    }

    angular
        .module('blocChat', ['ui.router', 'firebase', 'ui.bootstrap'])
        .config(config)
        .run([LoginPopup]);
})();
