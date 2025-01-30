$(document).ready(() => {
    $("#todo-list .list-group-item").on("click",function (){
        const taskText = $(this).text();
        $('#task-details').text("Деталі: " + taskText);
    })
})