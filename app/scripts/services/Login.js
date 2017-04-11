(function () {
    function Login() {
        return {
            createAccount: function (email, password) { // Creates new account
                return firebase.auth().createUserWithEmailAndPassword(email, password);
            },
            loginGoogle: function () { // Popup window to login with Google account
                var provider = new firebase.auth.GoogleAuthProvider();
                return firebase.auth().signInWithPopup(provider);
            },
            loginEmail: function (email, password) { // Login existing user
                return firebase.auth().signInWithEmailAndPassword(email, password);
            }
        };
    }

    angular
        .module('blocChat')
        .factory('Login', Login);
})();
