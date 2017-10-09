(function () {
    function HomeCtrl(Room, Message, Login, $uibModal) {
        this.homeTitle = 'PDX Chat';
        this.rooms = Room.all; // Room.all = Array of "rooms" database with each room in an index as object
        this.userData = Login.getUser();
        /**
        * @function this.signOut
        * @desc Signs out current user
        */
        this.signOut = function () {
            Login.signOut();
        };
        /**
        * @function this.showModal
        * @desc Opens modal in home template
        */
        this.showModal = function () {
            $uibModal.open({
                templateUrl: '/templates/modal.html',
                controller: 'ModalCtrl as modal'
            });
        };
        /**
        * @function this.selectRoom
        * @desc Selects room in navigation and receives room ID to show room messages
        */
        this.selectRoom = function (room) {
            this.selectedRoom = room;
            this.messages = Message.getByRoomId(room.$id);
        };
        /**
        * @function this.sendMessage
        * @desc Sends message to Message factory (incl. user name, room Id and content); clears input field afterwards
        */
        this.sendMessage = function () {
            if (this.selectedRoom) {
                Message.send(this.userData.user.email, this.selectedRoom, this.messageContent);
                this.messageContent = '';
            } else {
                alert('Please choose a room first.');
            }
        };
    }

    angular
        .module('pdx-chat')
        .controller('HomeCtrl', ['Room', 'Message', 'Login', '$uibModal', HomeCtrl]);
})();
