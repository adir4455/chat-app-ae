const socket = io();

//Elements
const $rooms = document.getElementById("rooms");
const $roomname = document.getElementById("room-name");

// Templates
const roomsTemplate = document.querySelector("#rooms-template").innerHTML;

socket.on("existingRooms", ({ rooms }) => {
  const html = Mustache.render(roomsTemplate, { rooms });
  $rooms.innerHTML = html;
});

$rooms.addEventListener("change", (e) => {
  $roomname.value = e.target.value;
});
