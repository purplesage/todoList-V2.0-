import {todoInputs, projectInputs} from './addToDoButton';
import { todoObjectDataBase } from '.';
import { format, isThisWeek, parseISO} from 'date-fns';
import { sideMenuTabDivs } from '.';

const makeTodoObject = () => {
    const newTodoObject = {
        title: todoInputs.titleInput.value,
        details: todoInputs.detailsInput.value,
        dueDate: new Date(parseISO(todoInputs.dueDateInput.value)),
        priority: null,
        div: null,
    };

    return newTodoObject;

};

const makeTodoDiv = (/* onLoadVersion */) => {

    //todo: idea for onLoad content loading.
    /* if (onLoadVersion === true) {
        maybe a switch statement that will change from makeTodoObject to database.forEach()
    } */

    const todoObject = makeTodoObject();

    const todoDiv = document.createElement('div');
        todoDiv.classList = "todo-div";

    const doneCheckButton = document.createElement('input');
        doneCheckButton.setAttribute('type', 'checkbox');
        doneCheckButton.setAttribute('id', 'done-check-button');

    const todoTitleP = document.createElement('p');
        todoTitleP.textContent = `${todoObject.title}`;

    const detailsButton = document.createElement('button');
        detailsButton.textContent = 'DETAILS';  

    const todoDueDateP = document.createElement('p');
        todoDueDateP.textContent = `${format(todoObject.dueDate, "MM/dd/yyyy")}`;

    const editButtonSVG = document.createElement('p');
        editButtonSVG.textContent = 'EDIT-SVG';

    const deleteButtonSVG = document.createElement('p');
        deleteButtonSVG.textContent = 'DELETE-SVG';

        //todo: priority stuff goes here
    
    todoDiv.append(
        doneCheckButton,
         todoTitleP,
          detailsButton,
           todoDueDateP,
            editButtonSVG,
             deleteButtonSVG);

    todoObject.div = todoDiv;

    todoObjectDataBase.push(todoObject);

    return {
        todoDiv,
         doneCheckButton,
          todoTitleP,
           detailsButton,
            todoDueDateP,
             editButtonSVG,
              deleteButtonSVG,
                todoObject,
            };
};

//this logic goes into the addTodo button.
const todoDistribution = () => {
    const divMaker = makeTodoDiv();
    const todaysDate = format(new Date(), "MM/dd/yyyy")

    const cloneMaker = () => {
        let clone = divMaker.todoObject.div.cloneNode(true);

        return clone;
    };
    

    
    console.log(`${format(divMaker.todoObject.dueDate, "MM/dd/yyyy")} object`),
    console.log(`${todaysDate} today`);

    sideMenuTabDivs.homeDiv.appendChild(divMaker.todoObject.div);

    
    if (format(divMaker.todoObject.dueDate, "MM/dd/yyyy") === todaysDate){
        
        /* let clone = divMaker.todoObject.div.cloneNode(true); */
        sideMenuTabDivs.todayDiv.appendChild(cloneMaker());
        
    };

    if (isThisWeek(new Date(divMaker.todoObject.dueDate)) === true){
        
        /* let clone = divMaker.todoObject.div.cloneNode(true); */
        sideMenuTabDivs.weekDiv.appendChild(cloneMaker());
    };

};

const makeProjectTab = () => {
    const projectsUl = document.getElementById('projects-ul');

    const newProjectTab = document.createElement('li');

    newProjectTab.textContent = `${projectInputs.createProjectButton.textContent}`;

    projectsUl.appendChild(newProjectTab);
};



export {/* makeTodoObject, makeProjectTab, makeTodoDiv,  */todoDistribution};