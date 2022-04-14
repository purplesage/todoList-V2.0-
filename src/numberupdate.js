import { todayFilter } from "./todoFilters";
import {sideMenuTabFilters} from '.';
import format from "date-fns/format";
import { todoObjectDataBase } from ".";
//this function will only update the number display of home, today and week.

const defaultNumberUpdate = (() => {

    const todayTab = document.getElementById('today-tab');
    const tNumberDisplay = document.createElement('p');
    todayTab.appendChild(tNumberDisplay);
    const numberUpdate = () => {

        const tFilter = todayFilter().tFilter;
        tNumberDisplay.textContent = tFilter.length === 0? "": tFilter.length;

    };

    return {numberUpdate}

})();


/* const defaultNumberUpdate = () => {

    
    const todayTab = document.getElementById('today-tab');
    const todayNumberObject = {
        numberDisplay: document.createElement('p'),
        update: () => {
            todayNumberObject.numberDisplay.textContent = tFilter.length === 0? "": tFilter.length; 
        },
    };

        todayNumberObject.tab.appendChild(todayNumberObject.numberDisplay);

    

    return {todayNumberObject};
}; */

export {defaultNumberUpdate};