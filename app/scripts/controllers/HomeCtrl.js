(function () {
    function HomeCtrl(Room, Message, Login, $uibModal) {
        this.homeTitle = 'Bloc Chat';
        this.rooms = Room.all; // Room.all = Array of "rooms" database with each room in an index as object
        /**
        * @function this.userEmail
        * @desc Returns user email
        */
        this.userEmail = function () {
            return Login.getUserEmail();
        };
        /**
        * @function this.signOut
        * @desc Signs out current user
        */
        this.signOut = function () {
            Login.signOut();
        }
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
        * @function this.showCurrentRoom
        * @desc Shows current room in navigation and gets current room ID to show room messages
        */
        this.showCurrentRoom = function (room) {
            this.currentRoom = room;
            this.messages = Message.getByRoomId(room.$id);
        };
        /**
        * @function this.sendMessage
        * @desc Sends message to Message factory (incl. user name, room Id and content); clears input field afterwards
        */
        this.sendMessage = function () {
            if (this.currentRoom) {
                Message.send(this.userEmail(), this.currentRoom, this.messageContent);
                this.messageContent = '';
            } else {
                alert('Please choose a room first.');
            }
        };
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', 'Message', 'Login', '$uibModal', HomeCtrl]);
})();
