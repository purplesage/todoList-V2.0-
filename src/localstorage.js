import { todoObjectDataBase } from ".";
import { homeFilter } from "./todoFilters";
import { makeTodoDiv } from "./todoMaker";
import parseISO from "date-fns/parseISO";
import { defaultNumberUpdate } from "./numberupdate";


const LSobjectSetter = (todoObject) => {

    window.localStorage.setItem('todoObject', JSON.stringify(todoObject));

};

const LSobjectDivPopulator = () => {
    
    if (window.localStorage.length > 0) {
        
        for (let i = 0; i <= window.localStorage.length; i++) {
            
            const parsedTodoObject = JSON.parse(window.localStorage.getItem('todoObject'));
            parsedTodoObject.dueDate = new Date(parseISO(parsedTodoObject.dueDate));

            makeTodoDiv(parsedTodoObject);
        };
        
        homeFilter();
        defaultNumberUpdate.numberUpdate();
    };
};

export {LSobjectSetter, LSobjectDivPopulator};