
import {/* projectInputs, */ /* todoInputs */} from './addToDoButton';
import { todoObjectDataBase } from '.';
import { sideMenuTabFilters } from '.';


const projectLiDataBase = [];

//* project 'li' maker.
const projectFilter = (TDobject) => {

    let liAlreadyExists = false;

    if (projectLiDataBase.length >= 1) {
        
        for (let i = 0; i <= projectLiDataBase.length; i++) {
            if (projectLiDataBase[i] === TDobject.projectName) {
                liAlreadyExists = true;
            };
        } ;
    };

    if (liAlreadyExists === false) {

        const projectsUl = document.getElementById('projects-ul');

        const newProjectTab = document.createElement('li');
    
        newProjectTab.textContent = `${TDobject.projectName}`;
    
        projectsUl.appendChild(newProjectTab);

        projectLiDataBase.push(newProjectTab.textContent);

        newProjectTab.addEventListener('click', () => {

            let projectFilter = todoObjectDataBase.filter(todoObject => todoObject.projectName === newProjectTab.textContent);

            for (let i = 0; i < projectFilter.length; i++) {
                sideMenuTabFilters.generalDiv.appendChild(projectFilter[i].div);
            };

        });


    };
    
};






/* const emptyProjectContent = () => {

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

}; */



export { projectFilter };