(function () {
	function LoginCtrl($uibModalInstance, Login) {
		this.showCreateForm = false;
		this.showLoginForm = false;
		this.loginGoogle = function () {
			Login.loginGoogle();
		};
		this.loginEmail = function () {
			Login.loginEmail(this.userEmail, this.userPassword);
		};
		this.createAccount = function () {
			Login.createAccount(this.userEmail, this.userPassword);
		};
	}

	    angular
        .module('blocChat')
        .controller('LoginCtrl', ['$uibModalInstance', 'Login', LoginCtrl]);
})();
