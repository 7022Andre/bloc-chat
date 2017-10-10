(function () {
  function Room($firebaseArray) {
    var ref = firebase.database().ref().child('rooms'); // Reference to database 'rooms' on backend
    var rooms = $firebaseArray(ref);
    return {
      all: rooms, // returns rooms array
      addRoom: function (roomName) { // adds new room to database
        rooms.$add(roomName);
      }
    }
  }

  angular
    .module('pdx-chat')
    .factory('Room', ['$firebaseArray', Room]);
})();
