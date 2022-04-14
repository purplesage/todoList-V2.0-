import { todayFilter } from "./todoFilters";

//this function will only update the number display of home, today and week.
const defaultNumberUpdate = () => {
    const tFilter = todayFilter().todayFilter;
    const todayTab = document.getElementById('today-tab');
    const numberDisplay = document.createElement('p');
        todayTab.appendChild(numberDisplay);

    const updateNumber = () => {
        numberDisplay.textContent = tFilter.length === 0? "": tFilter.length; 
    };

    return updateNumber;
};

export {defaultNumberUpdate};