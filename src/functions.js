import {addButtonDomElements, todoInputs, projectInputs} from './addToDoButton';
import { todoObjectDataBase } from '.';

const makeTodoObject = () => {
    const newTodoObject = {
        title: todoInputs.titleInput.value,
        details: todoInputs.detailsInput.value,
        dueDate: todoInputs.dueDateInput.value,
        priority: null,
    }

    todoObjectDataBase.push(newTodoObject);

    return newTodoObject;

};

const makeProjectTab = () => {
    const projectsUl = document.getElementById('projects-ul');

    const newProjectTab = document.createElement('li');

    newProjectTab.textContent = `${projectInputs.createProjectButton.textContent}`;

    projectsUl.appendChild(newProjectTab);
};

const makeTodoDiv = () => {
    const todoObject = makeTodoObject();

    const todoDiv = document.createElement('div');
        todoDiv.classList = "todo-div";

    const doneCheckButton = document.createElement('input');
        doneCheckButton.setAttribute('type', 'check');
        doneCheckButton.setAttribute('id', 'done-check-button');

    const todoTitleP = document.createElement('p');
        todoTitleP.textContent = `${todoObject.title}`;

    const detailsButton = document.createElement('button');
        detailsButton.textContent = 'DETAILS';  

    const todoDueDateP = document.createElement('p');
        todoDueDateP.textContent = `${todoObject.dueDate}`;

    const editButtonSVG = document.createElement('p');
        editButtonSVG.textContent = 'EDIT-SVG';

    const deleteButtonSVG = document.createElement('p');
        deleteButtonSVG.textContent = 'DELETE-SVG';
    
    todoDiv.append(
        doneCheckButton,
         todoTitleP,
          detailsButton,
           todoDueDateP,
            editButtonSVG,
             deleteButtonSVG);
};



export {makeTodoObject, makeProjectTab, makeTodoDiv};