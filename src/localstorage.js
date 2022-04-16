import { homeFilter } from "./todoFilters";
import { makeTodoDiv } from "./todoMaker";
import parseISO from "date-fns/parseISO";
import { defaultNumberUpdate } from "./numberupdate";

// todo: need to take this function out of the todomaker function because it causes bugs.
const LSobjectSetter = (dataBase) => {

    if (dataBase.length > 0) {
        console.log(dataBase[0]);
        for (let i = 0; i < dataBase.length; i++) {
            
            window.localStorage.setItem(`todoObject${i}`, JSON.stringify(dataBase[i]));
        };
    };
};

const LSobjectDivPopulator = () => {
    
    if (window.localStorage.length > 0) {

        console.log(window.localStorage[0]);
        
        for (let i = 0; i <= window.localStorage.length; i++) {
            
            const parsedTodoObject = JSON.parse(window.localStorage.getItem(`todoObject${i}`));
            parsedTodoObject.dueDate = new Date(parseISO(parsedTodoObject.dueDate));

            makeTodoDiv(parsedTodoObject);
        };
        
        homeFilter();
        defaultNumberUpdate.numberUpdate();
    };
};

export {LSobjectSetter, LSobjectDivPopulator};