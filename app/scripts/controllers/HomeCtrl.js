(function () {
    function HomeCtrl(Room, $uibModal) {
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
        * @function this.deleteAllRooms
        * @desc Deletes all rooms
        */
        this.deleteAllRooms = function () {
            Room.deleteAllRooms();
        };
        /**
        * @function this.showCurrentRoom
        * @desc Shows current room in navigation
        */
        this.showCurrentRoom = function (room) {
            this.currentRoom = room;
        };
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', '$uibModal', HomeCtrl]);
})();
