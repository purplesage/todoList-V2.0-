import './styles/index.scss';
import {addButtonDomElements, todoInputs, projectInputs} from './addToDoButton';
/* import { format, isThisWeek, parseISO} from 'date-fns'; */
import { homeFilter, todayFilter, weekFilter } from './functions';

//? This module contains the content divs
//for the web's functions (logic), see logic.js

const todoObjectDataBase = [];



const sideMenuTabFilters = (() => {

    const displayDiv = document.getElementById('content-display');

    //* object for inmediate content add:
    const currentSelectedTabCheck = {
        home: true,
        today: false,
        week: false,
    };
    
    //*home filter and general div where todo's are appended.
    const homeTab = document.getElementById('home-tab');

    const generalDiv = document.createElement('ul');
    generalDiv.classList = "content-grid";
    
    //default content 
    displayDiv.appendChild(generalDiv);


    homeTab.addEventListener('click', () => {
        currentSelectedTabCheck.home = true;
        currentSelectedTabCheck.today = false;
        currentSelectedTabCheck.week = false;
        
        generalDiv.innerHTML = "";
        homeFilter(generalDiv);
    });

    //*today filter
    const todayTab = document.getElementById('today-tab');

    todayTab.addEventListener('click', () => {
        currentSelectedTabCheck.home = false;
        currentSelectedTabCheck.today = true;
        currentSelectedTabCheck.week = false;

        generalDiv.innerHTML = "";
        todayFilter(generalDiv);
    });

    //*week filter
    const weekTab = document.getElementById('week-tab');

    weekTab.addEventListener('click', () => {
        currentSelectedTabCheck.home = false;
        currentSelectedTabCheck.today = false;
        currentSelectedTabCheck.week = true;

        generalDiv.innerHTML = "";
        weekFilter(generalDiv);
    });

    return {generalDiv, currentSelectedTabCheck};

})(); 

export { todoObjectDataBase, sideMenuTabFilters };


