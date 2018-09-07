(function () {
    function Room($firebaseArray) {
        var Room = {};
        var ref = firebase.database().ref().child("tasks");
    //    var rooms = $firebaseArray(ref);
        Room.ph = "Enter room name here";
        Room.newName = "New room";
     //   Room.all = rooms;
     //   Room.add = function () {
     //       rooms.$add({ roomName: Room.newName });
     //   };

        return Room;
    }
    angular
        .module('blocitoff')
        .factory('Room', ['$firebaseArray', Room]);
})();
