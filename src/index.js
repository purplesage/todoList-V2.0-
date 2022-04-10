import './styles/index.scss';
import {addButtonDomElements, todoInputs, projectInputs} from './addToDoButton';

//? This module contains the content divs
//for the web's functions (logic), see logic.js

const todoObjectDataBase = [];



const sideMenuTabDivs = (() => {

    const displayDiv = document.getElementById('content-display');
    
    //*home content
    const homeTab = document.getElementById('home-tab');

    const homeDiv = document.createElement('div');
    homeDiv.classList = "content-grid";
    homeDiv.textContent = "home test";
    //default content 
    displayDiv.appendChild(homeDiv);


    homeTab.addEventListener('click', () => {
        displayDiv.innerHTML = "";
        displayDiv.appendChild(homeDiv);
    });

    //*today content
    const todayTab = document.getElementById('today-tab');

    const todayDiv = document.createElement('div');
    todayDiv.classList = "content-grid";
    todayDiv.textContent = "today test";

    todayTab.addEventListener('click', () => {
        displayDiv.innerHTML = "";
        displayDiv.appendChild(todayDiv);
    });

    //*week content
    const weekTab = document.getElementById('week-tab');

    const weekDiv = document.createElement('div');
        weekDiv.classList = "content-grid";
        weekDiv.textContent = "week test";

        weekTab.addEventListener('click', () => {
        displayDiv.innerHTML = "";
        displayDiv.appendChild(weekDiv);
    });

    return {homeDiv, todayDiv, weekDiv};

})(); 

export { todoObjectDataBase, sideMenuTabDivs };


