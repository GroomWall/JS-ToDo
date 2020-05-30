const form = document.querySelector('.task').addEventListener('submit', addToDoItem)

function addToDoItem(event) {
    event.preventDefault();
    if (taskInput.value === '')
        alert('Please, enter the value!')
}

function createToDoItem(title) {

}

const listItems = document.querySelectorAll('.list__item') // get all list items
const taskInput = document.querySelector('.task__input')
const addBtn = document.querySelector('.btn.btn--add')