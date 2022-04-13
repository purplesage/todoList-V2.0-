
import { todoInputs} from './addToDoButton';
import { todoObjectDataBase } from '.';
import { sideMenuTabFilters } from '.';



const projectLiDataBase = [];

//* project 'li' maker.
const projectFilter = (TDobject) => {

    let liAlreadyExists = false;
    let projectSwitch = false;

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

        const filter = () => {
            const filter = todoObjectDataBase.filter(todoObject => todoObject.projectName === newProjectTab.textContent);

            for (let i = 0; i < filter.length; i++) {
                sideMenuTabFilters.generalDiv.appendChild(filter[i].div);
            };
        };

        newProjectTab.addEventListener('click', () => {

            sideMenuTabFilters.currentSelectedTabCheck.home = false;
            sideMenuTabFilters.currentSelectedTabCheck.today = false;
            sideMenuTabFilters.currentSelectedTabCheck.week = false;

            projectSwitch = true;

            sideMenuTabFilters.generalDiv.innerHTML = "";

            filter();
            
            
        });

        todoInputs.addTodoButton.addEventListener('click', () => {

            if (projectSwitch = true) {
                sideMenuTabFilters.generalDiv.innerHTML = "";
                filter();
            };

        });
    };

    return projectSwitch;
};

export { projectFilter };