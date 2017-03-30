(function () {
    function Room($firebaseArray) {
        var ref = firebase.database().ref().child('rooms'); // Reference to database 'rooms' on backend
        var rooms = $firebaseArray(ref);
        return {
            all: rooms
        };
    }

    angular
        .module('blocChat')
        .factory('Room', ['$firebaseArray', Room]);
})();
