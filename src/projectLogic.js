import {projectInputs} from './addToDoButton';

//* project 'li' maker.
const makeProjectTab = () => {
    const projectsUl = document.getElementById('projects-ul');

    const newProjectTab = document.createElement('li');

    newProjectTab.textContent = `${projectInputs.projectNameInput.value}`;

    projectsUl.appendChild(newProjectTab);
};

export { makeProjectTab };