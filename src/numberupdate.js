import { todayFilter, weekFilter } from "./todoFilters";
import { todoObjectDataBase } from ".";
//this function will only update the number display of home, today and week.

const defaultNumberUpdate = (() => {

    const homeTab = document.getElementById('home-tab');
        homeTab.style.display = 'flex';
    const hNumberDisplay = document.createElement('p');
    homeTab.appendChild(hNumberDisplay);

    const todayTab = document.getElementById('today-tab');
        todayTab.style.display = 'flex';
    const tNumberDisplay = document.createElement('p');
    todayTab.appendChild(tNumberDisplay);

    const weekTab = document.getElementById('week-tab');
    weekTab.style.display = 'flex';
    const wNumberDisplay = document.createElement('p');
    weekTab.appendChild(wNumberDisplay);

    const numberUpdate = () => {

        const hFilterLength = todoObjectDataBase.length;
        hNumberDisplay.textContent = hFilterLength === 0? "": hFilterLength;
        
        const tFilterLength = todayFilter().tFilter.length;
        tNumberDisplay.textContent = tFilterLength === 0? "": tFilterLength;

        const wFilterLength = weekFilter().wFilter.length;
        wNumberDisplay.textContent = wFilterLength === 0? "": wFilterLength;

    };

    return {numberUpdate}

})();


export {defaultNumberUpdate};