import {todoInputs, projectInputs} from './addToDoButton';
import { todoObjectDataBase } from '.';
import { format, isThisWeek, parseISO} from 'date-fns';
import { sideMenuTabFilters } from '.';
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

    //* todomaker function invocation and DOM elements creation
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

    //* priority property definition and style change.

    const priorityRadioButtons = todoInputs.priorityButtonsDiv.getElementsByTagName('input')

    for (let i = 0; i < priorityRadioButtons.length; i++) {
        if (priorityRadioButtons[i].checked === true ) {
            todoObject.priority = priorityRadioButtons[i].value
            break;
        };
    };

    if (todoObject.priority === 'low') {

        todoDiv.style.borderLeft = 'rgb(1, 139, 1) solid 4px';

    }else if (todoObject.priority === 'medium') {
        todoDiv.style.borderLeft = 'rgb(255, 234, 0) solid 4px';
        
    }else if (todoObject.priority === 'high') {
        todoDiv.style.borderLeft = 'rgb(227, 0, 0) solid 4px';

    };

    //*details div:
    //todo: put all of these 'functions'... IN SOME FUNCTIONS! (duh)
    const mainGridDiv = document.getElementById('main-grid');

    const detailsDiv = document.createElement('div');
        detailsDiv.classList = "details-div";

    const detailsTitle = document.createElement('p');
        detailsTitle.textContent = `Title: ${todoObject.title}`;

    const detailsP = document.createElement('p');
        detailsP.textContent = `Details: ${todoObject.details}`;

    const detailsExitButton = document.createElement('button');
        detailsExitButton.textContent = 'X';


    // details div display and undisplay (<-is that a word? lol)
    detailsExitButton.addEventListener('click', () => {
        
        mainGridDiv.removeChild(detailsDiv);
    });

    detailsDiv.append(detailsTitle, detailsExitButton, detailsP);

    detailsButton.addEventListener('click', () => {

        mainGridDiv.appendChild(detailsDiv);

    });

    //* todo div and todo object delete
    deleteButtonSVG.addEventListener('click', () => {

        const contentDiv = document.querySelector(".content-grid");

        contentDiv.removeChild(todoDiv);
        todoObjectDataBase.splice(todoObjectDataBase.indexOf(todoObject), 1);
        
    });

    //*edit button---------------------

    const editInputsDiv = document.createElement('div');
        editInputsDiv.classList = "edit-inputs-div";

    const editPriorityButton = todoInputs.priorityButtonsDiv;

    const editExitButton = document.createElement('button');
        editExitButton.textContent = 'X';

    const editConfirmButton = document.createElement('button');
    editConfirmButton.textContent = 'CONFIRM EDIT';


    editButtonSVG.addEventListener('click', () => {

        editInputsDiv.innerHTML = "";

        for (let key in todoObject) {
            let descriptionElement = document.createElement('input');
            
            if (key === 'title') {
                descriptionElement.setAttribute('type', 'text');
                descriptionElement.setAttribute('placeholder', `Title: ${todoObject.title}`);
                //todoDivObject.title = descriptionElement.value;

            }else if (key === "details") {
                descriptionElement.setAttribute('type', 'text');
                descriptionElement.setAttribute('placeholder', `Details: ${todoObject.details}`);
                //todoDivObject.description = descriptionElement.value;

            }else if (key === 'dueDate') {
                descriptionElement.setAttribute('type', 'date');
                descriptionElement.value = `${todoObject.dueDate}`;
                // todoDivObject.dueDate = descriptionElement.value;

            }else{
                break;
            }

            editInputsDiv.appendChild(descriptionElement);

        };

        editInputsDiv.append(editExitButton ,editConfirmButton, editPriorityButton);
        mainGridDiv.appendChild(editInputsDiv);

    });

    editExitButton.addEventListener('click', () => {
        
        editInputsDiv.innerHTML = "";
        mainGridDiv.removeChild(editInputsDiv);
    });

    editConfirmButton.addEventListener('click', () => {

        const editButtonDivInputs = editInputsDiv.getElementsByTagName('input');

        todoObject.title = editButtonDivInputs[0].value;
        todoObject.details = editButtonDivInputs[1].value;
        todoObject.dueDate = new Date(parseISO(editButtonDivInputs[2].value));
        
        const editRadioButtons = editPriorityButton.getElementsByTagName('input'); 

        for (let i = 0; i < editRadioButtons.length; i++) {
            if (editRadioButtons[i].checked === true ) {
                todoObject.priority = editRadioButtons[i].value
                break;
            };
        };
    
        if (todoObject.priority === 'low') {
    
            todoDiv.style.borderLeft = 'rgb(1, 139, 1) solid 4px';
    
        }else if (todoObject.priority === 'medium') {
            todoDiv.style.borderLeft = 'rgb(255, 234, 0) solid 4px';
            
        }else if (todoObject.priority === 'high') {
            todoDiv.style.borderLeft = 'rgb(227, 0, 0) solid 4px';
    
        };

        todoTitleP.textContent = todoObject.title;
        todoDueDateP.textContent = format(todoObject.dueDate, "MM/dd/yyyy");

        detailsTitle.textContent = `Title: ${todoObject.title}`;
        detailsP.textContent = `Details: ${todoObject.details}`;
        
        
        mainGridDiv.removeChild(editInputsDiv);
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
};

//this logic goes into the addTodo button.


//* project 'li' maker.
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

//---------------------------------------------

const inmediateTodoDivAppending = (objectDiv) => {

    /* appends todo Div to the main content div depending
     on which sidemenu tab is currently pressed. */

    if (objectDiv.currentSelectedTabCheck.home === true){
        objectDiv.generalDiv.innerHTML = "";
        homeFilter(objectDiv.generalDiv);

    };

    if(objectDiv.currentSelectedTabCheck.today === true){
        objectDiv.generalDiv.innerHTML = "";
        todayFilter(objectDiv.generalDiv);
    };
    
    if(objectDiv.currentSelectedTabCheck.week === true){
        objectDiv.generalDiv.innerHTML = "";
        weekFilter(objectDiv.generalDiv);
    };

}

export {
    makeTodoDiv,
     homeFilter,
      todayFilter,
       weekFilter,
        inmediateTodoDivAppending
        };