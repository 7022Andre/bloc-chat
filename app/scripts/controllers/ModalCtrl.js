(function () {
    function ModalCtrl($scope, $uibModalInstance, Room) {
        var rooms = Room.all;
        /**
        * @function $scope.cancel
        * @desc Closes modal when 'Cancel' button is clicked.
        */
        $scope.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };
        /**
        * @function $scope.createRoom
        * @desc Sends room name to Room factory which creates entry in rooms array
        */
        $scope.createRoom = function () {
            rooms.$add({
                roomName: $scope.roomName
            });
            // $scope.cancel(); // Closes modal after room was added
            $scope.roomName = ''; // clears input field after room was added
        };
    }

    angular
        .module('blocChat')
        .controller('ModalCtrl', ['$scope', '$uibModalInstance', 'Room', ModalCtrl]);
})();
