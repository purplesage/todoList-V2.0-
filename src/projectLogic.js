import { todoInputs} from './addToDoButton';
import { todoObjectDataBase } from '.';
import { sideMenuTabFilters } from '.';

const projectLiDataBase = [];

//* project 'li' maker.
const projectFilter = (TDobject) => {

    let liAlreadyExists = false; //used to avoid duplcate project tabs.
    let projectSwitch = false; // used to access the project's inmediate todo appender (see below).

    //checks if a tab 'li' already exists and stops the code from going further if thats the case.
    if (projectLiDataBase.length >= 1) {
        
        for (let i = 0; i <= projectLiDataBase.length; i++) {

            if (projectLiDataBase[i] === TDobject.projectName) {
                liAlreadyExists = true;
            };
        };
    };

    /* if the tab li doesnt exists, it gets created and appended to the project ul element
    the text content of this element is the same as the name of the todo object's 'projectName' property (see todoMaker.js). Last, the new tab's text content is added into 'project li database', which will be used the next time the 'projectFilter' function runs in order to prevent duplicates. */

    if (liAlreadyExists === false) {

        const projectsUl = document.getElementById('projects-ul');

        const newProjectTab = document.createElement('li');
            newProjectTab.style.display = "flex";
    
        newProjectTab.textContent = `${TDobject.projectName}`;
    
        projectsUl.appendChild(newProjectTab);

        projectLiDataBase.push(newProjectTab.textContent);


    /* This function declares a variable which contains a filtered version of the 'todoObjectDatabase' list. In it will be all the todoObjects whose project names are the same as the new tab 'li' element, then the filter function appends all the todo divs to the 'general div' element, where they are displayed. The reason i put this logic into a function is because i needed to call it in two different places. (see below). */

        const pFilter = () => {
            const filter = todoObjectDataBase.filter(todoObject => todoObject.projectName === newProjectTab.textContent);

            for (let i = 0; i < filter.length; i++) {
                sideMenuTabFilters.generalDiv.appendChild(filter[i].div);
            };

            return {filter};
        };

    /* Here an event listener is added into the newly created li element. This event listener sets the tab switches to false (see index.js), activates the project switch by assigning it to true. And then, after clearing the generalDiv element (the display), the filter function is invoked. */

        newProjectTab.addEventListener('click', () => {

            sideMenuTabFilters.currentSelectedTabCheck.home = false;
            sideMenuTabFilters.currentSelectedTabCheck.today = false;
            sideMenuTabFilters.currentSelectedTabCheck.week = false;

            projectSwitch = true;

            sideMenuTabFilters.generalDiv.innerHTML = "";

            pFilter();
        });

    /* here a second event listener is added into the 'addButton' element, this one puts a
    condition in it which only allows the filter function to be accesed if the 'projectSwitch' variable is set to true. This is used in order to append the todo's div as soon as the add todo button is pressed. */
        //todo :this function does not work properly, need to refactor.
        /* todoInputs.addTodoButton.addEventListener('click', () => {

            if (projectSwitch = true) {
                sideMenuTabFilters.generalDiv.innerHTML = "";
                pFilter();
            };
        }); */

        sideMenuTabFilters.homeTab.addEventListener('click', () => {
            projectSwitch = false;
        });

        sideMenuTabFilters.todayTab.addEventListener('click', () => {
            projectSwitch = false;
        });

        sideMenuTabFilters.weekTab.addEventListener('click', () => {
            projectSwitch = false;

        });
        
        //! currently, number updated for projects bugs for an unknown reason.
        //as i progress in T-O-P ill find a way to fix it (hopefully)
        //todo: number creation and update:

    };

    return {projectSwitch};
};

export { projectFilter };