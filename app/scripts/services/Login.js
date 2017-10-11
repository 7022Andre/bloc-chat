(function () {
  function Login($uibModal) {
    return {
      signOut: function () {
        firebase.auth().signOut();
        alert('You have been signed out.');
        $uibModal.open({
          templateUrl: '/templates/loginModal.html',
          controller: 'LoginCtrl as login',
          backdrop: 'static',
          keyboard: false
        });
      },
      createAccount: function (email, password) {
        return firebase.auth().createUserWithEmailAndPassword(email, password);
      },
      loginGoogle: function () {
        var provider = new firebase.auth.GoogleAuthProvider();
        return firebase.auth().signInWithPopup(provider);
      },
      loginEmail: function (email, password) {
        return firebase.auth().signInWithEmailAndPassword(email, password);
      },
      userData: {},
      getUser: function () {
        return this.userData;
      }
    };
  }

  angular
    .module('pdx-chat')
    .factory('Login', ['$uibModal', Login]);
})();
