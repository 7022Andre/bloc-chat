(function () {
    function HomeCtrl(Room, Message, $uibModal) {
        this.homeTitle = 'Bloc Chat';
        this.rooms = Room.all; // Room.all = Array of "rooms" database with each room in an index as object
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
        * @function this.deleteAllRooms
        * @desc Deletes all rooms
        */
        this.deleteAllRooms = function () {
            Room.deleteAllRooms();
        };
        /**
        * @function this.sendMessage
        * @desc Sends message to Message factory (incl. user name, room Id and content); clears input field afterwards
        */
        this.sendMessage = function () {
            if (this.currentRoom) {
                Message.send(this.name, this.currentRoom, this.messageContent);
                this.messageContent = '';
            } else {
                alert('Please choose a room first.');
            }
        };
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', 'Message', '$uibModal', HomeCtrl]);
})();
