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

        const hFilter = todoObjectDataBase.length;
        hNumberDisplay.textContent = hFilter === 0? "": hFilter;
        
        const tFilter = todayFilter().tFilter.length;
        tNumberDisplay.textContent = tFilter === 0? "": tFilter;

        const wFilter = weekFilter().wFilter.length;
        wNumberDisplay.textContent = wFilter === 0? "": wFilter;

    };

    return {numberUpdate}

})();


export {defaultNumberUpdate};