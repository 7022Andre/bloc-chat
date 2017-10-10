(function () {
  function HomeCtrl(Room, Message, Login, $uibModal) {
    this.homeTitle = 'PDX Chat';
    this.rooms = Room.all; // Room.all = Array of "rooms" database with each room in an index as object
    this.userData = Login.getUser();

    this.signOut = function () {
      Login.signOut();
    };

    this.showModal = function () {
      $uibModal.open({
        templateUrl: '/templates/modal.html',
        controller: 'ModalCtrl as modal'
      });
    };

    this.selectRoom = function (room) {
      this.selectedRoom = room;
      this.messages = Message.getByRoomId(room.$id);
    };

    this.sendMessage = function () {
      if (this.selectedRoom) {
        Message.send(this.userData.user.email, this.selectedRoom, this.messageContent);
        this.messageContent = '';
      } else {
        alert('Please choose a room first.');
      }
    };
  }

  angular
    .module('pdx-chat')
    .controller('HomeCtrl', ['Room', 'Message', 'Login', '$uibModal', HomeCtrl]);
})();
