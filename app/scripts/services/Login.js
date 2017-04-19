(function () {
    function Login($uibModal) {
        return {
            signOut: function () {
                firebase.auth().signOut();
                alert('You have been signed out.');
                $uibModal.open({
                    templateUrl: '/templates/login.html',
                    controller: 'LoginCtrl as login',
                    backdrop: 'static',
                    keyboard: false
                });
            },
            createAccount: function (email, password) { // Creates new account
                return firebase.auth().createUserWithEmailAndPassword(email, password);
            },
            loginGoogle: function () { // Popup window to login with Google account
                var provider = new firebase.auth.GoogleAuthProvider();
                return firebase.auth().signInWithPopup(provider);
            },
            loginEmail: function (email, password) { // Login existing user
                return firebase.auth().signInWithEmailAndPassword(email, password);
            },
            userData: {},
            getUser: function () {
                return this.userData;
            }
        };
    }

    angular
        .module('blocChat')
        .factory('Login', ['$uibModal', Login]);
})();