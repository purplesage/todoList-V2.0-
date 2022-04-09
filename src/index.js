import './styles/index.scss';

//? This module contains the basic dynamically created DOM elements.
//for the web's functions (logic), see logic.js

const AddButtonDomElements = (() => {

    //*Add div Element
    const addButtonDomElement = document.getElementById('add-button');
    
    const mainGridDiv = document.getElementById('main-grid');

    const addButtonDiv = document.createElement('div');
        addButtonDiv.classList = "add-button-div";

    //*header DOM elements
    const header = document.createElement('div');
        header.classList = 'header-div';

    const headerP = document.createElement('p');
        headerP.textContent = 'Create a new...';
    
    const divExitButton = document.createElement('button');
        divExitButton.textContent = "X";

    header.append(headerP, divExitButton);

    //*action options
    const actionsListDiv = document.createElement('div');
        actionsListDiv.classList = "actions-list-div";

    const actionsUl = document.createElement('ul');
        actionsUl.classList = "actions-ul";

    const toDoActionTab = document.createElement('li');
        toDoActionTab.textContent = 'To Do';

    const projectActionTab = document.createElement('li');
        projectActionTab.textContent = 'Project';

    actionsUl.append(toDoActionTab, projectActionTab);   

    actionsListDiv.appendChild(actionsUl);

    //*input div basic element

    const inputMainDiv = document.createElement('div');
    inputMainDiv.classList = "input-main-div";

    //*appending dom elements to main div
    addButtonDiv.appendChild(header);
    addButtonDiv.appendChild(actionsListDiv);
    addButtonDiv.appendChild(inputMainDiv);
    

    addButtonDomElement.addEventListener('click', () => {

        //appends add button div to main-grid div.
        mainGridDiv.appendChild(addButtonDiv);
    })

    //these elements will perform specific actions through event listeners.
    return {divExitButton, toDoActionTab, projectActionTab, inputMainDiv};

})();

const todoInputs = (() => {


    //* top inputs
    const topInputsDiv = document.createElement('div');

    const titleInput = document.createElement('input');
        titleInput.setAttribute('type', 'text');
        titleInput.setAttribute('placeholder', 'Title: ');
        titleInput.classList = "title-input";
    topInputsDiv.appendChild(titleInput);

    const detailsInput = document.createElement('input');
        detailsInput.setAttribute('type', 'text');
        detailsInput.setAttribute('placeholder', 'Details: ');
        detailsInput.classList = "details-input";
    topInputsDiv.appendChild(detailsInput);


    //* bottom inputs

    const dueDateLabel = document.createElement('label');

    const dueDateInput = document.createElement('input');
        dueDateInput.setAttribute('type', 'date');
        dueDateInput.setAttribute('required', '');
        dueDateInput.classList = 'due-date-input';

    const priorityButtonsLabel = document.createElement('label');
    

    AddButtonDomElements.inputMainDiv



})();