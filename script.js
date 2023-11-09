document.getElementById('task-creation-form').addEventListener('submit', 
    function(e){
        e.preventDefault();

        const taskTitle = document.getElementById('task-title').value;
        const taskDescription = document.getElementById('task-description').value;
        const taskCategory = document.getElementById('category').value;
        const taskStatusInput = document.querySelector('input[name=status]:checked');
        const taskStatus = taskStatusInput.value;
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
        document.getElementById('task-creation-form').reset();
    } 
}

// function editTask(){ 
//     const key = JSON.parse(localStorage.getItem('taskCardKey'));
//     const updatedData = JSON.parse(localStorage.getItem('data'));
//     // document.getElementById('task-title').value = updatedData[key].title;
//     // Use the key to access the specific data
//     console.log(updatedData[key].title);
//   }