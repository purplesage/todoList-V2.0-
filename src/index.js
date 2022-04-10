import './styles/index.scss';
import {addButtonDomElements, todoInputs, projectInputs} from './addToDoButton';
import { format, isThisWeek, parseISO} from 'date-fns';

//? This module contains the content divs
//for the web's functions (logic), see logic.js

const todoObjectDataBase = [];



const sideMenuTabFilters = (() => {

    const displayDiv = document.getElementById('content-display');
    
    //*home filter
    const homeTab = document.getElementById('home-tab');

    const generalDiv = document.createElement('ul');
    generalDiv.classList = "content-grid";
    generalDiv.textContent = "home test";
    //default content 
    displayDiv.appendChild(generalDiv);


    homeTab.addEventListener('click', () => {
        generalDiv.innerHTML = "";

        for (let i = 0; i < todoObjectDataBase.length; i++) {
                    
            generalDiv.appendChild(todoObjectDataBase[i].div);
        };

    });

    //*today filter

    const todaysDate = format(new Date(), "MM/dd/yyyy");
    const todayTab = document.getElementById('today-tab');

    todayTab.addEventListener('click', () => {
        generalDiv.innerHTML = "";
        const todayFilter = todoObjectDataBase.filter(todoObject => format(todoObject.dueDate, "MM/dd/yyyy") === todaysDate);

        for (let i = 0; i < todayFilter.length; i++) {
                    
            generalDiv.appendChild(todayFilter[i].div);
        };
    });

    //*week filter
    const weekTab = document.getElementById('week-tab');

        weekTab.addEventListener('click', () => {
            generalDiv.innerHTML = "";
            const weekFilter = todoObjectDataBase.filter(todoObject => isThisWeek(new Date(todoObject.dueDate)) === true);

            for (let i = 0; i < weekFilter.length; i++) {
                    
                generalDiv.appendChild(weekFilter[i].div);
            };
    });

    return {generalDiv};

})(); 

export { todoObjectDataBase, sideMenuTabFilters };


