import './styles/index.scss';
import {addButtonDomElements, todoInputs, projectInputs} from './addToDoButton';
import { format, isThisWeek, parseISO} from 'date-fns';
import { homeFilter, todayFilter, weekFilter } from './functions';

//? This module contains the content divs
//for the web's functions (logic), see logic.js

const todoObjectDataBase = [];



const sideMenuTabFilters = (() => {

    const displayDiv = document.getElementById('content-display');

    //* inmediate content add:

    let currentlyInHomeTab = true;
    let currentlyInTodayTab = false;
    let currentlyInWeekTab = false;
    
    //*home filter
    const homeTab = document.getElementById('home-tab');

    const generalDiv = document.createElement('ul');
    generalDiv.classList = "content-grid";
    
    //default content 
    displayDiv.appendChild(generalDiv);


    homeTab.addEventListener('click', () => {
        currentlyInHomeTab = true;
        currentlyInTodayTab = false;
        currentlyInWeekTab = false;
        
        generalDiv.innerHTML = "";

        homeFilter(generalDiv);
    });

    //*today filter

    
    const todayTab = document.getElementById('today-tab');

    todayTab.addEventListener('click', () => {
        currentlyInHomeTab = false;
        currentlyInTodayTab = true;
        currentlyInWeekTab = false;

        generalDiv.innerHTML = "";
        todayFilter(generalDiv);
    });

    //*week filter
    const weekTab = document.getElementById('week-tab');

        weekTab.addEventListener('click', () => {
            currentlyInHomeTab = false;
            currentlyInTodayTab = false;
            currentlyInWeekTab = true;

            generalDiv.innerHTML = "";
            weekFilter(generalDiv);
    });

    return {generalDiv, currentlyInHomeTab, currentlyInTodayTab, currentlyInWeekTab};

})(); 

export { todoObjectDataBase, sideMenuTabFilters };


