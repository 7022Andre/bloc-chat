(function () {
    /**
    * @function Room
    * @desc Gets rooms database from Firebase
    * @param {Array} $firebaseArray
    */
    function Room($firebaseArray) {
        var ref = firebase.database().ref().child('rooms'); // Reference to database 'rooms' on backend
        var rooms = $firebaseArray(ref);
        return {
            all: rooms, // returns rooms array
            addRoom: function (roomName) { // adds new room to database
                rooms.$add(roomName);
            },
            deleteAllRooms: function () { // deletes 'rooms' database and ALL rooms
                ref.remove();
            }
        };
    }

    angular
        .module('blocChat')
        .factory('Room', ['$firebaseArray', Room]);
})();
