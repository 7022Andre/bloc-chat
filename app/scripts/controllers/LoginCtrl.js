(function () {
	function LoginCtrl($uibModalInstance, Login) {
		this.createForm;
		this.emailForm;
		this.mainForm = true;

		this.showEmailForm = function () {
			this.emailForm = true;
			this.mainForm = false;
		};

		this.showCreateForm = function () {
			this.createForm = true;
			this.mainForm = false;
		};

		this.showMainForm = function () {
			this.mainForm = true;
			this.createForm = false;
			this.emailForm = false;
		};

		this.loginGoogle = function () {
			Login.loginGoogle().then(function (user) {
                $uibModalInstance.close();
            });
		};

		this.loginEmail = function () {
			Login.loginEmail(this.userEmail, this.userPassword).then(function () {
				$uibModalInstance.close(); // Success: Returns promise and closes modal
			}, function (error) { // Error: Alerts error message
				alert(error.message);
			});
		};

		this.createAccount = function () {
			Login.createAccount(this.userEmail, this.userPassword).then(function () {
				$uibModalInstance.close();
			}, function (error) {
				alert(error.message);
			});
		};
	}

		angular
        .module('blocChat')
        .controller('LoginCtrl', ['$uibModalInstance', 'Login', LoginCtrl]);
})();
