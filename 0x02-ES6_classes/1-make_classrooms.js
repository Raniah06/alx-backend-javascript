const ClassRoom = require('./0-classroom');
function initializeRooms() {
  return [
    new ClassRoom(10),
    new ClassRoom(20),
    new ClassRoom(30),
  ];
}
module.exports = initializeRooms;
