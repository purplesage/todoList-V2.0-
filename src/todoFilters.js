import { todoObjectDataBase } from ".";
import {format, isThisWeek} from "date-fns";

//* filter functions.

/* these 'filters' create a filtered version of the 'todoObjectDataBase' list
(see index.js). What this filtered list contains depends on the side menu tab's name.
for example:  */


/* when clicking the 'home' tab, we want to show every single todo div in the database
 (this one isn't much of a filter, but i kept the name for consistency). */
const homeFilter = (div) => {

    for (let i = 0; i < todoObjectDataBase.length; i++) {
                    
        div.appendChild(todoObjectDataBase[i].div);
    };

};

/* clicking on the 'today' tab, all todo objects div's which are due for 
today's date will be shown. */
const todayFilter = (div) => {

    /* in order to make the evaluation, both the todo object's due date and today's date
    have to be formated in the same way. 

    Thats because the new Date() object actually returns not only the date, but also the current hour.
    HTML's date input gets the date, but not the hour. 

    So i formated both to show only month/day/year. */

    const todaysDate = format(new Date(), "MM/dd/yyyy");
    const todayFilter = todoObjectDataBase.filter(todoObject => format(todoObject.dueDate, "MM/dd/yyyy") === todaysDate);

    //after filtering, all the divs in the filtered list are added.

        for (let i = 0; i < todayFilter.length; i++) {
                    
            div.appendChild(todayFilter[i].div);
        };

        return {todayFilter};
};

/*clicking on the 'week' tab shows all todos which are due this week  */
const weekFilter = (div) => {

    /* the 'isThisWeek' function is used to check if a given date is in this week.
    For some reason, it only works if, as argument, it is fed a new date object, which contains a date object with a parseISO fed into it. It looks something like this:
    
    isThisWeek(new Date(new Date(parseISO(inputValue)))), note: the date cannot be formated either
    in order for it to work.
    
    I'm not sure why this function (isthisweek) only works like this, it could be a bug,
    but i suspect that i just dont know how to use it properly.
    
    */
    const weekFilter = todoObjectDataBase.filter(todoObject => isThisWeek(new Date(todoObject.dueDate)) === true);

    for (let i = 0; i < weekFilter.length; i++) {
            
        div.appendChild(weekFilter[i].div);
    };
};


/* this function contains logic for the invocation of the filters.
It is a system based on variable 'switches',
which are manipulated by clicking on the side menu tabs.
Depending on which one is === true, a filter will be called.
(For more info on the switches see index.js).

the 'addTodoButton' (see addToDoButton.js) invokes this function.

*/

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
/* One more special filter (project filter) can be found in it's own module at projectLogic.js */

export {inmediateTodoDivAppending, homeFilter, todayFilter, weekFilter};