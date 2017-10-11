(function () {
  function RoomModalCtrl($uibModalInstance, Room) {
    this.cancel = function () {
      $uibModalInstance.dismiss('cancel');
    };
    this.createRoom = function () {
      Room.addRoom(this.roomName);
      this.cancel();
    };
  }

  angular
    .module('pdx-chat')
    .controller('RoomModalCtrl', ['$uibModalInstance', 'Room', RoomModalCtrl]);
})();
