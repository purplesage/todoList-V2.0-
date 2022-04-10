import {todoInputs, projectInputs} from './addToDoButton';
import { todoObjectDataBase } from '.';
import { format, isThisWeek, parseISO} from 'date-fns';
/* import { sideMenuTabFilters } from '.'; */

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

    const todoDiv = document.createElement('li');
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

        //* div/object delete

        const deleteDiv = () =>{
            const contentDiv = document.querySelector(".content-grid");

            contentDiv.removeChild(todoDiv);
            todoObjectDataBase.splice(todoObjectDataBase.indexOf(todoObject), 1);
        };

        deleteButtonSVG.addEventListener('click', () => {
            
            deleteDiv();
        });

    
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
    const todaysDate = format(new Date(), "MM/dd/yyyy");



    /* sideMenuTabDivs.homeDiv.appendChild(divMaker.todoObject.div); */

    
    /* if (format(divMaker.todoObject.dueDate, "MM/dd/yyyy") === todaysDate){
        
        let clone = divMaker.todoObject.div.cloneNode(true);
        sideMenuTabDivs.todayDiv.appendChild(cloneMaker().todoObject.div);
        
    };

    if (isThisWeek(new Date(divMaker.todoObject.dueDate)) === true){
        
        let clone = divMaker.todoObject.div.cloneNode(true);
        sideMenuTabDivs.weekDiv.appendChild(cloneMaker().todoObject.div);
    }; */

};

const makeProjectTab = () => {
    const projectsUl = document.getElementById('projects-ul');

    const newProjectTab = document.createElement('li');

    newProjectTab.textContent = `${projectInputs.createProjectButton.textContent}`;

    projectsUl.appendChild(newProjectTab);
};

//* filter functions.

const homeFilter = (div) => {

    for (let i = 0; i < todoObjectDataBase.length; i++) {
                    
        div.appendChild(todoObjectDataBase[i].div);
    };

};

const todayFilter = (div) => {

    const todaysDate = format(new Date(), "MM/dd/yyyy");
    const todayFilter = todoObjectDataBase.filter(todoObject => format(todoObject.dueDate, "MM/dd/yyyy") === todaysDate);

        for (let i = 0; i < todayFilter.length; i++) {
                    
            div.appendChild(todayFilter[i].div);
        };
};

const weekFilter = (div) => {

    const weekFilter = todoObjectDataBase.filter(todoObject => isThisWeek(new Date(todoObject.dueDate)) === true);

    for (let i = 0; i < weekFilter.length; i++) {
            
        div.appendChild(weekFilter[i].div);
    };
};






export {todoDistribution, homeFilter, todayFilter, weekFilter};