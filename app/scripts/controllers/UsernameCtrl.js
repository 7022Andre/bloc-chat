(function () {
    function UsernameCtrl($uibModalInstance, $cookies) {
        /**
        * @function this.createUser
        * @desc Creates username and sets cookie, then closes modal
        */
        this.createUser = function () {
            if (this.userName) {
                $cookies.put('blocChatCurrentUser', this.userName);
                alert('Welcome, ' + this.userName + '.');
                $uibModalInstance.dismiss('cancel');
            }
        };
    }

    angular
        .module('blocChat')
        .controller('UsernameCtrl', ['$uibModalInstance', '$cookies', UsernameCtrl]);
})();
