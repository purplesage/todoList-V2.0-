
import {projectInputs} from './addToDoButton';


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

export { makeProjectTab };