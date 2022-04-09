import './styles/index.scss';

const AddButtonDomElementsCreation = (() => {

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
    
    //*appending dom elements to main div
    addButtonDiv.appendChild(header);
    addButtonDiv.appendChild(actionsListDiv);
    

    addButtonDomElement.addEventListener('click', () => {

        //appends add button div to main-grid div.
        mainGridDiv.appendChild(addButtonDiv);
        console.log('it works');
    })

})();