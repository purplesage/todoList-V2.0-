import { todoObjectDataBase } from ".";
import { homeFilter } from "./todoFilters";

const LSobjectSetter = (todoObject) => {

    window.localStorage.setItem('todoObject', JSON.stringify(todoObject));

};

const LSobjectDivPopulator = (dataBase) => {
    
    if (window.localStorage.length > 0) {
        
        for (let i = 0; i <= window.localStorage.length; i++) {
            
            const parsedTodoObject = JSON.parse(window.localStorage.getItem('todoObject'));
            dataBase.push(parsedTodoObject);
            
        };
        
        /* homeFilter(); */
    };
};

export {LSobjectSetter, LSobjectDivPopulator};