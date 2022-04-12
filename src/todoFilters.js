import { todoObjectDataBase } from ".";
import {format, isThisWeek} from "date-fns";

//* filter functions.

const homeFilter = (div) => {

    for (let i = 0; i < todoObjectDataBase.length; i++) {
                    
        div.appendChild(todoObjectDataBase[i].div);
    };

};

const todayFilter = (div) => {

    const todaysDate = format(new Date(), "MM/dd/yyyy");
    const todayFilter = todoObjectDataBase.filter(todoObject => format(todoObject.dueDate, "MM/dd/yyyy") === todaysDate);

        for (let i = 0; i < todayFilter.length; i++) {
                    
            div.appendChild(todayFilter[i].div);
        };
};

const weekFilter = (div) => {

    const weekFilter = todoObjectDataBase.filter(todoObject => isThisWeek(new Date(todoObject.dueDate)) === true);

    for (let i = 0; i < weekFilter.length; i++) {
            
        div.appendChild(weekFilter[i].div);
    };
};

//---------------------------------------------

const inmediateTodoDivAppending = (objectDiv) => {

    /* appends todo Div to the main content div depending
     on which sidemenu tab is currently pressed. */

    if (objectDiv.currentSelectedTabCheck.home === true){
        objectDiv.generalDiv.innerHTML = "";
        homeFilter(objectDiv.generalDiv);

    };

    if(objectDiv.currentSelectedTabCheck.today === true){
        objectDiv.generalDiv.innerHTML = "";
        todayFilter(objectDiv.generalDiv);
    };
    
    if(objectDiv.currentSelectedTabCheck.week === true){
        objectDiv.generalDiv.innerHTML = "";
        weekFilter(objectDiv.generalDiv);
    };

};

export {inmediateTodoDivAppending, homeFilter, todayFilter, weekFilter};