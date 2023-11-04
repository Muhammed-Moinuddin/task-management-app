// let taskFormDisplay = 1;
// let taskFormDiv = document.getElementById('task-form');

// function createTask(){
//     if (taskFormDisplay == 1){
//         taskFormDiv.style.display = "block";
//         taskFormDisplay = 0
//     } else {
//         taskFormDiv.style.display = "none";
//         taskFormDisplay = 1
//     }
// }
const storedFormTasks = JSON.parse(localStorage.getItem('data')) || [];
storedFormTasks.forEach((element) => {
    const div = document.createElement('div');
    div.textContent = `${element.title} and ${element.dueDate}`;
    document.getElementById('single-task').appendChild(div);
});


document.getElementById('task-creation-form').addEventListener('submit', 
    function(e){
        e.preventDefault();

        const taskTitle = document.getElementById('task-title').value;
        const taskDescription = document.getElementById('task-description').value;
        const taskCategory = document.getElementById('category').value;
        const taskStatus = document.querySelector('input[name=status]:checked');
        const taskDuedate = document.getElementById('duedate').value;
        const taskDeadlinetime = document.getElementById('deadlinetime').value;

        const taskData = {
            title: taskTitle,
            taskDescription: taskDescription,
            category: taskCategory,
            status: taskStatus,
            dueDate: taskDuedate,
            deadlineTime: taskDeadlinetime
        };
        saveTaskFormData(taskData);
    }

);

function saveTaskFormData(data){
    const storedFormData = JSON.parse(localStorage.getItem('data')) || [];
    if(storedFormData.some(e => data.title == e.title)){
        alert('The task has already been created');
        return;
    } else if(data.title == "") {
        alert('Kindly enter some data');
        return;
    } else {
        storedFormData.push(data);
        localStorage.setItem('data', JSON.stringify(storedFormData));
        alert("Form Submitted");
        window.location.href='/index.html';
    } 
}
