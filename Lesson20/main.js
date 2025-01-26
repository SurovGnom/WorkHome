$(document).ready(function(){
    $("#todo-list .list-group-item").click(function (){
        var taskText = $(this).text();
        $('#task-details').text("Деталі: " + taskText);
    })
})