let taskFormDisplay = 1;
let taskFormDiv = document.getElementById('task-creation-form');

function createTask(){
    if (taskFormDisplay == 1){
        taskFormDiv.style.display = "block";
        taskFormDisplay = 0
    } else {
        taskFormDiv.style.display = "none";
        taskFormDisplay = 1
    }
}