(function () {
    function Message($firebaseArray) {
        var ref = firebase.database().ref().child('messages');
        var messages = $firebaseArray(ref);
        return {
            getByRoomId: function (roomId) {
                return $firebaseArray(ref.orderByChild('roomId').equalTo(roomId)); // returns array with all messages in specific room
            },
            send: function (name, room, message) {
                messages.$add({
                    username: name,
                    roomId: room.$id,
                    sentAt: firebase.database.ServerValue.TIMESTAMP,
                    content: message
                });
            }
        };
    }

    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', Message]);
})();
