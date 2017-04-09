(function () {
    function Message($firebaseArray) {
        var ref = firebase.database().ref().child('messages');
        return {
            getByRoomId: function (roomId) {
                return $firebaseArray(ref.orderByChild('roomId').equalTo(roomId)); // returns array with all messages in specific room
            }
        };
    }

    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', Message]);
})();
