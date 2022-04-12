
import {/* projectInputs, */ /* todoInputs */} from './addToDoButton';


const projectLiDatabase = [];

//* project 'li' maker.
const makeProjectTab = () => {

    let liAlreadyExists = false;

    if (projectLiDatabase.length > 0) {

        for (let i = 0; i <= projectLiDatabase.length; i++) {
            if (projectLiDatabase[i] === projectInputs.projectNameInput.value) {
                liAlreadyExists = true;
            };
        };
    };

    if (liAlreadyExists === false) {

        const projectsUl = document.getElementById('projects-ul');

        const newProjectTab = document.createElement('li');
    
        newProjectTab.textContent = `${projectInputs.projectNameInput.value}`;
    
        projectsUl.appendChild(newProjectTab);

        projectLiDatabase.push(newProjectTab.textContent);

    };
    
};

const emptyProjectContent = () => {

    const containerDiv = document.createElement('div');
    containerDiv.style.display = "flex";
    containerDiv.style.flexDirection = 'column';

    const warningText = document.createElement('p');
        warningText.textContent = 'This project is empty!';

    const suggestionP = document.createElement('p');
        suggestionP.textContent = "Create a new to-do item or delete this project"

    const deleteProjectButton = document.createElement('button');
    deleteProjectButton.textContent = 'Delete Project';

    containerDiv.append(warningText, suggestionP, deleteButton);

    //todo: delete project button logic.

};



export { makeProjectTab };