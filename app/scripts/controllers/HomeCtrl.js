(function () {
    function HomeCtrl(Room) {
        this.heroTitle = 'Bloc Chat';
        this.rooms = Room.all;
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', HomeCtrl]);
})();
