(function () {
    function HomeCtrl(Room, Message, $uibModal, $cookies) {
        this.homeTitle = 'Bloc Chat';
        this.rooms = Room.all; // Room.all = Array of "rooms" database with each room in an index as object
        this.name = $cookies.get('blocChatCurrentUser'); // Gets user name from cookie.
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
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', 'Message', '$uibModal', '$cookies', HomeCtrl]);
})();
