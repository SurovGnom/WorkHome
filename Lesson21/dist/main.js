"use strict";

$(document).ready(function () {
  $("#todo-list .list-group-item").on("click", function () {
    var taskText = $(this).text();
    $('#task-details').text("Деталі: " + taskText);
  });
});