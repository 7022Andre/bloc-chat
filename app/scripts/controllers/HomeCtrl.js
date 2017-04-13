(function () {
    function HomeCtrl(Room, $uibModal) {
        this.heroTitle = 'Bloc Chat';
        this.rooms = Room.all; // Room.all = Array of "rooms" database with each room in an index as object
        var entireRoom = Room.all;
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
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', '$uibModal', HomeCtrl]);
})();
