# todoList-V2.0-
This info is mostly for my future self:

This is an simple webpage app which allows the users to set little 'todo' remainders so that they don't mess up their schedules. The way the information of each todo is displayed depends mainly on the date they are due. 

Whatever todo is due today can be accesed by clicking the 'today' tab. The same applays to the rest of the tabs. The home tab shows every single todo that has been added, and the week tab shows all todo's due today.

This app also allows to create 'project tabs' which will display any todo that's related to a specific project.

The todo's are stored in the browser's 'local storage'. It works as a pseudo-data base.

With that said, there are still some problems...

The core functionalities do work. The page can be used without much trouble, but some side stuff is still left to be added or fixed.

To be added:

    1-. Major css overhaul. The css that was done is just to make sense of the flow of the project, nothing is final and i intend to change everything about it to make it look pretty. I decided to leave it for later because i'm mostly interested in JS. (although i know JS is really important when handling css, but i'll see to that later).

    2-. Notes functionality. I'll copy it from the student 'scotty' from TOP. I'll copy some cool css stuff from him too.

To be fixed:

    1-. Project number Update. I tried to implement this function, but i encountered a strange bug when writing it, and so far haven't encountered a solution. I'll see to this after learning a little bit more about JS and i folllow along the TOP course.

    This characteristic is needed to know when to delete any project tab that currently 'holds' no todo tasks.

How this app works:

When writing the code i had first planned to create different div elements which would contain the different todo tasks depending on their due date. That is: home tab was a container which contained all the todo divs, today tab all the tabs due today... and so on. But i found out that a single DOM element couldnt be i several different places at the same time. 

One of the solutions was to clone this DOM element for every tab in which it could be displayed. This represented a problem, as i didn't want to clone the todo task div a bunch of times. So i implemented a different strategy: the filter strategy.

Filter strategy

Instead of cloning each todo div, i created kind of an 'API' which would serve each todo div to a single div depending on the side 'tab' that was pressed.

It is a beautiful depiction of how the 'front-end' communicates with the 'back-end', except in this case there is no real 'back-end'. You'll see what i mean when i describe how the app works.

The flow of the app works as follows:

1-. the user enters the todo's information (such as title, due date, etc.) and presses the 'add todo' button. (all these elements where dinamically created in addToDoButton.js).

2-. Then, the user presses the 'add todo' button. A function called 'makeTodoObject' will take all the data written in the input and create a new object that contains it.

3-. Now, the 'makeTodoObject' is passed as an argument in another function called 'makeTodoDiv', which is called by an event listener in 'add todo' button. This is the largest function in the project and it is responsable for creating the todo's 'li' element, which will be desplayed in the 'general div' (created in the IIFE 'sideMenuTabFilters' in index.js), it then adds a few elements into this todo div which perform different tasks:

    1-. a check button (which will be used to change the div's style in the future).

    2-. title display.

    3-. detail button
        shows a div with all the todo's info in it.

    4-. due date display.

    5-. edit button.
        This button allows us to edit the todo's data.

    6-. delete button.
        deletes the todo.
    
    7-. it also adds a left border indicating the todo's priority.

Besides that, it also adds the todo object into the 'todoObjectDataBase' and calls the 'projectFilter', these two will be explained further.

4-.Having created the new todo div and it's inner html and all its functionalities, the div is now ready to be appended into the 'general div'. This is done by manipulating the todo object/s that have been added to the 'todoObjectDataBase'.

5-. This is where the filter strategy comes into action. In todoFilters.js, the 'todoObjectDataBase' list, is 'filtered' through the .filter() method, and it creates a new array which contains a subset of the original array. The content of these new arrays depends on the due date of each todo object.

6-. these filters are contained within function which are called by the 'add todo' button event listener, and the listeners of each side menu tab.

In other words: clicking the add todo or any side tab 'asks' (through the filters) the database for the corresponding todo divs and appends them into the general div.

Every time a filter is called, the general div is cleared, and the required todo divs are added into general div. So its kinda like an html request - response cycle. Its a clever trick which comes with it's fair share of work and bugs, but it was pretty fun to make.

7-. the numberupdate.js module just adds a number to each sidetab which indicates how many todo's will be displayed in it if clicked.

8-. finally, localstorage.js allows the todo Divs to be saved in the browsers local storage. This works as a temporal database. The functions in it are called by two event listeners in index.js.
These functions themselves work in a pretty clever way.

For more info on all these functions, check the comments in the src files themselves.


What i learned doing this project:

How to work with the new Date object and the isThisWeek, ParseISO, and format methods from date-fns.

DOM elements cannot exist in two places at one time.

How to work with the filter method.

Working with object factorys and module patterns (IIFE).

Using the <fieldset> method.

Using the radio and check inputs.

Structuring a project in modules and importing - exporting.

Some stuff about scoping and closure.

new event listeners (load and beforeload).

working with local storage (setitem, getitem, clear, json.stringify, json.parse);

appending several childs at the same time with append() method.










