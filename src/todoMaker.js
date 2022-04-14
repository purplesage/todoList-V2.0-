import {todoInputs} from './addToDoButton';
import { todoObjectDataBase } from '.';
import { format, parseISO} from 'date-fns';
import { projectFilter } from './projectLogic';
import { defaultNumberUpdate } from './numberupdate';

const makeTodoObject = () => {
    const newTodoObject = {
        title: todoInputs.titleInput.value,
        details: todoInputs.detailsInput.value,
        dueDate: new Date(parseISO(todoInputs.dueDateInput.value)),
        projectName: todoInputs.projectInput.value,
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

    todoObject.div = todoDiv;

    todoObjectDataBase.push(todoObject);

    //*project filter call
    if (todoObject.projectName !== "") {

        projectFilter(todoObject);
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

        defaultNumberUpdate.numberUpdate();
        
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

            }else if (key === "details") {
                descriptionElement.setAttribute('type', 'text');
                descriptionElement.setAttribute('placeholder', `Details: ${todoObject.details}`);

            }else if (key === 'dueDate') {
                descriptionElement.setAttribute('type', 'date');
                descriptionElement.value = `${todoObject.dueDate}`;
                
            }else if (key === 'projectName') {
                descriptionElement.setAttribute('type', 'text');
                descriptionElement.setAttribute('placeholder', `Project Name: ${todoObject.projectName}`);

            }else{
                break;
            };

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
        todoObject.projectName = editButtonDivInputs[3].value;
        
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

        if (todoObject.projectName !== "") {

            projectFilter(todoObject);
        };
        defaultNumberUpdate.numberUpdate();
        
        mainGridDiv.removeChild(editInputsDiv);
    });
    
    todoDiv.append(
        doneCheckButton,
         todoTitleP,
          detailsButton,
           todoDueDateP,
            editButtonSVG,
             deleteButtonSVG);
};
export { makeTodoDiv };