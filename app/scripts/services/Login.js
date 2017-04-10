(function () {
    function Login() {
        return {
            createAccount: function (email, password) {
                firebase.auth().createUserWithEmailAndPassword(email, password);
            },
            loginGoogle: function () {
                var provider = new firebase.auth.GoogleAuthProvider();
                firebase.auth().signInWithPopup(provider);
            },
            loginEmail: function (email, password) {
                firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                });
            }
        };
    }

    angular
        .module('blocChat')
        .factory('Login', Login);
})();
