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

// document.addEventListener('DOMContentLoaded', function() {
//   editTask();
// });

const updatedData = JSON.parse(localStorage.getItem('data'));


const storedFormTasks = updatedData || [];
storedFormTasks.forEach((element, index) => {

    const cardDiv = document.createElement('div');
    cardDiv.className= "card card-1";
    document.getElementById('task-cards').appendChild(cardDiv);
    
    const cardInfo = document.createElement('div');
    cardInfo.className = "card__info";
    cardDiv.appendChild(cardInfo);

    const deadlineDiv = document.createElement('div');
    deadlineDiv.className = "card__timeline";
    cardInfo.appendChild(deadlineDiv);

    const deadlineInput = document.createElement('input');
    deadlineInput.className="card__deadlineInput";
    deadlineInput.type = "time";
    deadlineInput.readOnly = true;
    deadlineInput.value = element.deadlineTime
    deadlineDiv.appendChild(deadlineInput);

    const dueDateInput = document.createElement('input');
    dueDateInput.className="card__dueDateInput";
    dueDateInput.type = "date";
    dueDateInput.readOnly = true;
    dueDateInput.value = element.dueDate;
    deadlineDiv.appendChild(dueDateInput);

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

    if (confirm('Are you sure you want to delete it?')) {
        updatedData.splice(itemToDelete,1)
        localStorage.setItem('data', JSON.stringify(updatedData));
        window.location.reload();
        console.log('Thing was saved to local storage.');
      } else {
        console.log('Thing was not saved to local storage.');
      }
}

document.getElementById('task-cards').addEventListener('click', (event) => {
  if (event.target.classList.contains('card__editing')) {
    const cardDiv = event.target.closest('.card');
    const taskCards = document.querySelectorAll('.card.card-1');
    const taskCardIndex = [...taskCards].indexOf(cardDiv);
    editTask(taskCardIndex);
  }
});


function editTask(taskCardIndex) {
  const card = document.querySelectorAll('.card.card-1')[taskCardIndex];
  if (card) {
    const editingDiv = card.querySelector('.card__editing');
    if (editingDiv && editingDiv.classList.contains('card__editing')) {
      editingDiv.classList.remove('card__editing');
      editingDiv.classList.add('card__saving');

      editingDiv.textContent = "Save ";

      const editingI = document.createElement('i');
      editingI.className = "fa-solid fa-floppy-disk";
      editingDiv.appendChild(editingI);

      const dueDateInput = card.querySelector('.card__dueDateInput');
      const deadlineInput = card.querySelector('.card__deadlineInput');

      dueDateInput.removeAttribute('readonly');
      deadlineInput.removeAttribute('readonly');

      dueDateInput.classList.add('editable');
      deadlineInput.classList.add('editable');

      saveData(card, dueDateInput, deadlineInput, taskCardIndex);
    }
  }
}



function saveData(card, dueDateInput, deadlineInput, taskCardIndex) {
  card.querySelector('.card__saving').addEventListener('click', (event) => {
    localStorage.setItem(updatedData[taskCardIndex].dueDate, event.target.value);
  })
  console.log(card, dueDateInput, deadlineInput, updatedData[taskCardIndex].dueDate)
}

// function editTask() {
//   const urlParams = new URLSearchParams(window.location.search);
//   const taskCardIndex = urlParams.get('taskCardIndex');
//   const cardIndex = JSON.parse(taskCardIndex);

//   // Retrieve updatedData from local storage within this function
//   const updatedData = JSON.parse(localStorage.getItem('data'));

//   if (updatedData && cardIndex !== null) {
//     // Use the cardIndex to access the specific data
//     console.log(updatedData[cardIndex].title);
//   }
// }

// // Call the editTask function when the new page loads
// editTask();