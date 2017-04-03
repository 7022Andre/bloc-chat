(function () {
    function ModalCtrl($uibModal) {
    	this.showModal = function () {
    		var modalInstance = $uibModal.open({
    			templateUrl: '/templates/modal.html',
    		});
    	};
    }

    angular
        .module('blocChat')
        .controller('ModalCtrl', ['$uibModal', ModalCtrl]);
})();
