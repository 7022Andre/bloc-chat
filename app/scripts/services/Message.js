(function () {
    function Message($firebaseArray) {
        var ref = firebase.database().ref().child('messages').orderByChild('roomId'); // orders messages by roomId
        return {
            getByRoomId: function (roomId) {
                return $firebaseArray(ref.equalTo(roomId)); // returns array with all messages in specific room
            }
        };
    }

    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', Message]);
})();
