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
storedFormTasks.forEach((element, index) => {

    const cardDiv = document.createElement('div');
    cardDiv.className= "card card-1";
    document.getElementById('task-cards').appendChild(cardDiv);
    
    const cardInfo = document.createElement('div');
    cardInfo.className = "card__info";
    cardDiv.appendChild(cardInfo);

    const deadlineP = document.createElement('p');
    deadlineP.className="card__timeline";
    deadlineP.textContent = `Due Date: ${element.dueDate} || Deadline Time: ${element.deadlineTime}`
    cardInfo.appendChild(deadlineP);

    const statusP = document.createElement('p');
    statusP.className="card__status";
    statusP.textContent = `Status: ${element.status} || Category: ${element.category}`
    cardInfo.appendChild(statusP);


    const iconDiv = document.createElement('div');
    iconDiv.className= "card__icon";
    cardDiv.appendChild(iconDiv);

    const italicElement = document.createElement('i');
    italicElement.className= `fa-solid fa-${index+1}`;
    iconDiv.appendChild(italicElement);

    const titleHeading = document.createElement('h1');
    titleHeading.className = 'card__title';
    titleHeading.textContent = `${element.title}`
    cardDiv.appendChild(titleHeading)

    const titleDescription = document.createElement('p');
    titleDescription.className = 'card__apply';
    titleDescription.textContent = `${element.taskDescription}`
    cardDiv.appendChild(titleDescription)

    const cardChanges = document.createElement('div');
    cardChanges.className = "card__changes";
    cardDiv.appendChild(cardChanges);

    const cardEditing = document.createElement('div');
    cardEditing.className = "card__editing";
    cardEditing.textContent = "Edit "
    cardChanges.appendChild(cardEditing);
    cardEditing.addEventListener('click', () => {editTask(index)}
    )

    const editingI = document.createElement('i');
    editingI.className="fa-solid fa-pen-to-square";
    cardEditing.appendChild(editingI);

    const cardDeleting = document.createElement('div');
    cardDeleting.className = "card__deleting";
    cardDeleting.textContent = "Delete "
    cardChanges.appendChild(cardDeleting);
    cardDeleting.addEventListener('click',() => {
        deleteTask(index)
    })

    const deletingI = document.createElement('i');
    deletingI.className="fa-solid fa-trash-can";
    cardDeleting.appendChild(deletingI);
});

function deleteTask(itemToDelete){
    const updatedData = JSON.parse(localStorage.getItem('data'));
    if (confirm('Are you sure you want to delete it?')) {
        updatedData.splice(itemToDelete,1)
        localStorage.setItem('data', JSON.stringify(updatedData));
        window.location.reload();
        console.log('Thing was saved to local storage.');
      } else {
        console.log('Thing was not saved to local storage.');
      }
}

function editTask(itemToEdit){
  window.location.href ='./task.html';
  const updatedData = JSON.parse(localStorage.getItem('data'));
  document.getElementById('task-title').value = updatedData[itemToEdit].title;
  console.log(updatedData[itemToEdit].title);
 

}