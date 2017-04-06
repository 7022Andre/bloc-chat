(function () {
    /**
    * @function Room
    * @desc Gets rooms database from Firebase
    * @param {Array} $firebaseArray
    */
    function Room($firebaseArray) {
        var ref = firebase.database().ref().child('rooms'); // Reference to database 'rooms' on backend
        var rooms = $firebaseArray(ref);
        return { // Returns all rooms and addRoom method
            all: rooms,
            addRoom: function (roomName) {
                rooms.$add(roomName);
            }
        };
    }

    angular
        .module('blocChat')
        .factory('Room', ['$firebaseArray', Room]);
})();
