let tasks = document.getElementById('myList');
let node = document.createElement('li');
let btn = document.getElementById("btn");




const addedtasks = [];
const tasksCompleted = [];

//let inputTaks = document.getElementById('input').value;

//function to add tasks to addedtasks

function addTask() {
    let inputTaks = document.getElementById('input').value;
    addedtasks.push(inputTaks);
    node.textContent = addedtasks;
     tasks.appendChild(node);
    //document.getElementById('myList').innerHTML = addedtasks ;
   

}

btn.addEventListener('click', addTask);
//addTask()

//function to delete a specific item from the added task and push to taskscompleted

/* const completeTask = () =>{ 
     tasksComplete.push(addedtasks)
     


}
*/
//completeTask()



//console.log(tasksCompleted)
//console.log(addedtasks)