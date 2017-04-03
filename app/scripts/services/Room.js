(function () {
    function Room($firebaseArray) {
        var ref = firebase.database().ref().child('rooms'); // Reference to database 'rooms' on backend
        var rooms = $firebaseArray(ref);
        /**
        * @function Room.createRoom
        * @desc Creates room by adding a record to $firebaseArray
        */
        Room.createRoom = function () {
            rooms.$add({$id: '$value'}).then(function(ref) {
                var id = ref.key;
            });
        };
        return {
            all: rooms
        };
    }

    angular
        .module('blocChat')
        .factory('Room', ['$firebaseArray', Room]);
})();
