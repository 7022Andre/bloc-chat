(function () {
    function ModalCtrl($uibModalInstance, Room) {
        /**
        * @function this.cancel
        * @desc Closes modal when 'Cancel' button is clicked.
        */
        this.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };
        this.createRoom = function () {
            Room.addRoom(this.roomName);
            this.cancel();
        };
    }

    angular
        .module('pdx-chat')
        .controller('ModalCtrl', ['$uibModalInstance', 'Room', ModalCtrl]);
})();
