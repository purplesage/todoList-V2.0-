import {makeTodoDiv} from "./todoMaker";
import { sideMenuTabFilters } from ".";
import { inmediateTodoDivAppending } from "./todoFilters";
import { makeProjectTab } from "./projectLogic";
import { defaultNumberUpdate } from "./numberupdate";

const addButtonDomElements = (() => {

    //*Add div Element
    const addButtonDomElement = document.getElementById('add-button');
    
    const mainGridDiv = document.getElementById('main-grid');

    const addButtonDiv = document.createElement('div');
        addButtonDiv.classList = "add-button-div";

    //*header DOM elements
    const header = document.createElement('div');
        header.classList = 'header-div';

    const headerP = document.createElement('p');
        headerP.textContent = 'Create new TO-DO';
    
    const divExitButton = document.createElement('button');
        divExitButton.textContent = "X";

    header.append(headerP, divExitButton);


    //*input div basic element

    const inputMainDiv = document.createElement('div');
    inputMainDiv.classList = "input-main-div";

    //*appending dom elements to main div
    addButtonDiv.appendChild(header);
    addButtonDiv.appendChild(inputMainDiv);

    //appends add button div to main-grid div.
    mainGridDiv.appendChild(addButtonDiv);
    
    //*event listeners to reveal and hide addButtonDiv.
    addButtonDomElement.addEventListener('click', () => {

        addButtonDiv.style.display = "grid";
        
        //default content:
        addButtonDomElements.inputMainDiv.innerHTML = "";
        addButtonDomElements.inputMainDiv.append(todoInputs.topInputsDiv, todoInputs.dueDateLabel, todoInputs.dueDateInput, todoInputs.priorityButtonsDiv, todoInputs.addTodoButton);

    });

    divExitButton.addEventListener('click', () => {

        addButtonDiv.style.display = "none";

    });

    //these elements will perform specific actions through event listeners.
    return { divExitButton, inputMainDiv, addButtonDiv };

})();

const todoInputs = (() => {

    //* top inputs
    const topInputsDiv = document.createElement('div');

    const titleInput = document.createElement('textarea');
        titleInput.setAttribute('placeholder', 'Title: ');
        titleInput.setAttribute('id', 'title-input');
        titleInput.classList = "title-input";
        
    topInputsDiv.appendChild(titleInput);

    const detailsInput = document.createElement('textarea');
        detailsInput.setAttribute('placeholder', 'Details: ');
        detailsInput.setAttribute('id', 'details-input');
        detailsInput.classList = "details-input";
    topInputsDiv.appendChild(detailsInput);

    const projectInput = document.createElement('input');
        projectInput.setAttribute('placeholder', 'Project name: ');
        projectInput.setAttribute('type', 'text');
        projectInput.setAttribute('id', 'project-input');
        projectInput.classList = "details-input";
    topInputsDiv.appendChild(projectInput);

    //* bottom inputs
    const dueDateLabel = document.createElement('label');
        dueDateLabel.setAttribute('for', 'due-date-input');
        dueDateLabel.textContent = "Due Date: ";

    const dueDateInput = document.createElement('input');
        dueDateInput.setAttribute('type', 'date');
        dueDateInput.setAttribute('required', '');
        detailsInput.setAttribute('id', 'due-date-input');
        dueDateInput.classList = 'due-date-input';

    // priority radio buttons
    const priorityButtonsDiv = document.createElement('fieldset');
        priorityButtonsDiv.classList = 'priority-buttons-fieldset';
        priorityButtonsDiv.textContent = "Priority: "

    const lowPriorityLabel = document.createElement('label');
        lowPriorityLabel.setAttribute('for', 'low-priority-button');
        lowPriorityLabel.classList = "low-priority-label";
        lowPriorityLabel.textContent = 'LOW';

    const lowPriorityButton = document.createElement('input');
        lowPriorityButton.setAttribute('type', 'radio');
        lowPriorityButton.setAttribute('id', 'low-priority-button');
        lowPriorityButton.setAttribute('name', 'todo-priority');
        lowPriorityButton.setAttribute('value', 'low');
        lowPriorityButton.classList = "low-priority-button";

    const mediumPriorityLabel = document.createElement('label');
        mediumPriorityLabel.setAttribute('for', 'medium-priority-button');
        mediumPriorityLabel.classList = "low-priority-label";
        mediumPriorityLabel.textContent = 'MEDIUM';

    const mediumPriorityButton = document.createElement('input');
        mediumPriorityButton.setAttribute('type', 'radio');
        mediumPriorityButton.setAttribute('id', 'medium-priority-button');
        mediumPriorityButton.setAttribute('name', 'todo-priority');
        mediumPriorityButton.setAttribute('value', 'medium');
        mediumPriorityButton.classList = "medium-priority-button";
    
    const highPriorityLabel = document.createElement('label');
        highPriorityLabel.setAttribute('for', 'high-priority-button');
        highPriorityLabel.classList = "low-priority-label";
        highPriorityLabel.textContent = 'HIGH';

    const highPriorityButton = document.createElement('input');
        highPriorityButton.setAttribute('type', 'radio');
        highPriorityButton.setAttribute('id', 'high-priority-button');
        highPriorityButton.setAttribute('name', 'todo-priority');
        highPriorityButton.setAttribute('value', 'high');
        highPriorityButton.classList = "high-priority-button";
    
    // add todo button
    const addTodoButton = document.createElement('button');
        addTodoButton.classList = "add-todo-button";
        addTodoButton.setAttribute('id', 'add-todo-button');
        addTodoButton.textContent = "ADD TO DO";
    
    priorityButtonsDiv.append(
        lowPriorityLabel,
         lowPriorityButton,
          mediumPriorityLabel,
           mediumPriorityButton,
            highPriorityLabel,
             highPriorityButton);

    

    //add todo event listener
    addTodoButton.addEventListener('click', () => {
        makeTodoDiv();

        inmediateTodoDivAppending();

        defaultNumberUpdate.numberUpdate();

        addButtonDomElements.addButtonDiv.style.display = "none";
    });

    return {
        topInputsDiv, 
         dueDateLabel, 
          dueDateInput, 
           priorityButtonsDiv,
            titleInput,
             detailsInput,
              dueDateInput,
               projectInput,
                addTodoButton,
            };

})();

export {addButtonDomElements, todoInputs, /* projectInputs */};