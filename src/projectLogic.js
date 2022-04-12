
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


        let projectsUl = document.getElementById('projects-ul');

        let newProjectTab = document.createElement('li');
    
        newProjectTab.textContent = `${TDobject.projectName}`;
    
        projectsUl.appendChild(newProjectTab);

        projectLiDataBase.push(newProjectTab.textContent);

        newProjectTab.addEventListener('click', () => {

            sideMenuTabFilters.currentSelectedTabCheck.home = false;
            sideMenuTabFilters.currentSelectedTabCheck.today = false;
            sideMenuTabFilters.currentSelectedTabCheck.week = false;

            sideMenuTabFilters.generalDiv.innerHTML = "";

            let filter = todoObjectDataBase.filter(todoObject => todoObject.projectName === newProjectTab.textContent);

            console.log(filter);
            console.log("home",sideMenuTabFilters.currentSelectedTabCheck.home);
            console.log("today",sideMenuTabFilters.currentSelectedTabCheck.today);
            console.log("week",sideMenuTabFilters.currentSelectedTabCheck.week);
            
            for (let i = 0; i < filter.length; i++) {
                sideMenuTabFilters.generalDiv.appendChild(filter[i].div);
            };
        });
    };
};

export { projectFilter };