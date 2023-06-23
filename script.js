$(document).ready(function () {
 var dev = [];

 $("#dev-form").on("submit", addDevToRoom);
 $("#room-tabe").on("click", ".btn-danger", removeDevFromRoom);
 $("#generate-form").on("click", generateRoom);

 function addDevToRoom(event) {
  event.preventDefault();

  var devName = $("#dev-namee").val();
  var devRole = $("#dev-role").val();
  var devSkill = $("#dev-skill").val();

  devs.push(dev);
  $("room-table tbody").append(
   "<tr><td>" +
    dev.name +
    "</td><td>" +
    dev.role +
    "</td><td>" +
    dev.skill +
    "</td><td><button class='btn btn-danger'>X</button></td></tr>"
  );

  updateTotalDevs();
  $("#dev-name").val("");
  $("#dev-role").val("");
  $("#dev-skill").val("");
 }
});
