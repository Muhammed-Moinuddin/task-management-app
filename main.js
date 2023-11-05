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

// <div class="card card-1">
//     <div class="card__icon"><i class="fa-solid fa-1"></i></div>
//     <p class="card__timeline"><i class="fas fa-times"></i></p>
//     <h2 class="card__title">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
//     <p class="card__apply">
//         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore distinctio impedit iusto ab veritatis eos ullam neque explicabo officia inventore suscipit voluptatum sed placeat odit corporis cum, pariatur nemo. Numquam.
//     </p>
// </div>

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
});

