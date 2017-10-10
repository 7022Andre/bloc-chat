(function () {
  function LoginCtrl($uibModalInstance, Login) {
    this.formShown = 'main';

    this.showForm = function (form) {
      this.formShown = form;
    };

    this.loginGoogle = function () {
      Login.loginGoogle().then(function (user) {
        $uibModalInstance.close();
      });
    };

    this.loginEmail = function () {
      Login.loginEmail(this.userEmail, this.userPassword).then(function (user) {
        Login.userData.user = user; // Success: Returns promise, saves user data and closes modal
        $uibModalInstance.close();
      }, function (error) { // Error: Alerts error message
        alert(error.message);
      });
    };

    this.createAccount = function () {
      if (this.userPassword === this.userPasswordConfirm) {
        Login.createAccount(this.userEmail, this.userPassword).then(function (user) {
          Login.userData.user = user;
          $uibModalInstance.close();
          alert('Your account has been created.');
        }, function (error) {
          alert(error.message);
        });
      } else {
        alert("Match");
      }
    };
  }

  angular
    .module('pdx-chat')
    .controller('LoginCtrl', ['$uibModalInstance', 'Login', LoginCtrl]);
})();
