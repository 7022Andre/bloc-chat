(function () {
	function LoginCtrl($uibModalInstance, Login) {
		this.currentUser = '';
		this.createForm = false;
		this.loginForm = false;
		this.mainForm = true;
		this.showLoginForm = function () {
			this.loginForm = true;
			this.mainForm = false;
			this.createForm = false;
		};
		this.showCreateForm = function () {
			this.createForm = true;
			this.mainForm = false;
			this.loginForm = false;
		};
		this.showMainForm = function () {
			this.mainForm = true;
			this.createForm = false;
			this.loginForm = false;
		};
		this.loginGoogle = function () {
			Login.loginGoogle().then(function(user) {
				console.log(user.uid); // Success: Returns userId and closes modal
                $uibModalInstance.close();
            }, function(error) {
				console.log(error.message); // Error: Returns error message
			});
		};
		this.loginEmail = function () {
			Login.loginEmail(this.userEmail, this.userPassword).then(function(user) {
				console.log(user.uid); // Success: Returns userId and closes modal
				this.currentUser = user.uid;
				console.log("User: " + this.currentUser);
				$uibModalInstance.close();
			}, function(error) {
				console.log(error.message); // Error: Returns error message
			});
		};
		this.createAccount = function () {
			Login.createAccount(this.userEmail, this.userPassword).then(function(user) {
				console.log(user.uid);
				$uibModalInstance.close();
			}, function(error) {
				console.log(error.message); 
			});
		};

	}

	    angular
        .module('blocChat')
        .controller('LoginCtrl', ['$uibModalInstance', 'Login', LoginCtrl]);
})();
