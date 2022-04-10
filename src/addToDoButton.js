import {todoDistribution} from "./functions";

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

    //appends add button div to main-grid div.
    mainGridDiv.appendChild(addButtonDiv);
    
    //*event listeners to reveal and hide addButtonDiv.
    addButtonDomElement.addEventListener('click', () => {

        addButtonDiv.style.display = "grid";
        
        //default content:
        addButtonDomElements.inputMainDiv.innerHTML = "";
        addButtonDomElements.inputMainDiv.append(todoInputs.topInputsDiv, todoInputs.dueDateLabel, todoInputs.dueDateInput, todoInputs.priorityButtonsDiv);

    });

    divExitButton.addEventListener('click', () => {

        addButtonDiv.style.display = "none";

    });

    //these elements will perform specific actions through event listeners.
    return {divExitButton, toDoActionTab, projectActionTab, inputMainDiv};

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
    const priorityButtonsDiv = document.createElement('div');
        priorityButtonsDiv.classList = 'priority-buttons-div';
        priorityButtonsDiv.textContent = "Priority: "

    const lowPriorityLabel = document.createElement('label');
        lowPriorityLabel.setAttribute('for', 'low-priority-button');
        lowPriorityLabel.classList = "low-priority-label";
        lowPriorityLabel.textContent = 'LOW';

    const lowPriorityButton = document.createElement('input');
        lowPriorityButton.setAttribute('type', 'radio');
        lowPriorityButton.setAttribute('id', 'low-priority-button');
        lowPriorityButton.classList = "low-priority-button";

    const mediumPriorityLabel = document.createElement('label');
        mediumPriorityLabel.setAttribute('for', 'medium-priority-button');
        mediumPriorityLabel.classList = "low-priority-label";
        mediumPriorityLabel.textContent = 'MEDIUM';

    const mediumPriorityButton = document.createElement('input');
        mediumPriorityButton.setAttribute('type', 'radio');
        mediumPriorityButton.setAttribute('id', 'medium-priority-button');
        mediumPriorityButton.classList = "medium-priority-button";
    
    const highPriorityLabel = document.createElement('label');
        highPriorityLabel.setAttribute('for', 'high-priority-button');
        highPriorityLabel.classList = "low-priority-label";
        highPriorityLabel.textContent = 'HIGH';

    const highPriorityButton = document.createElement('input');
        highPriorityButton.setAttribute('type', 'radio');
        highPriorityButton.setAttribute('id', 'high-priority-button');
        highPriorityButton.classList = "high-priority-button";
    
    // add todo button
    const addTodoButton = document.createElement('button');
        addTodoButton.classList = "add-todo-button";
        addTodoButton.setAttribute('id', 'add-todo-button');
        addTodoButton.textContent = "ADD TO DO";
    
    priorityButtonsDiv.append(lowPriorityLabel, lowPriorityButton, mediumPriorityLabel, mediumPriorityButton, highPriorityLabel, highPriorityButton, addTodoButton);

    //*tab changing event listener

    addButtonDomElements.toDoActionTab.addEventListener('click', () => {

        addButtonDomElements.inputMainDiv.innerHTML = "";
        addButtonDomElements.inputMainDiv.append(topInputsDiv, dueDateLabel, dueDateInput,priorityButtonsDiv);
    });

    //add todo event listener

    addTodoButton.addEventListener('click', () => {
        todoDistribution();
    });

    return {
        topInputsDiv, 
        dueDateLabel, 
        dueDateInput, 
        priorityButtonsDiv,
        titleInput,
        detailsInput,
        dueDateInput,
        priorityButtonsDiv,
    };

})();


const projectInputs = (() => {

    const projectNameInput = document.createElement('textarea');
        projectNameInput.setAttribute('placeholder', 'Project name: ');
        projectNameInput.setAttribute('id', 'project-name-input');
        projectNameInput.classList = "project-name-input";

    const createProjectButton = document.createElement('button');
        createProjectButton.textContent = "Create Project";
        createProjectButton.classList = "create-project-button";
        createProjectButton.setAttribute('id', 'create-project-button');

        addButtonDomElements.projectActionTab.addEventListener('click', () => {
        
            addButtonDomElements.inputMainDiv.innerHTML = "";
            addButtonDomElements.inputMainDiv.append(projectNameInput, createProjectButton);

        });

        return {createProjectButton};
})();

export {addButtonDomElements, todoInputs, projectInputs};