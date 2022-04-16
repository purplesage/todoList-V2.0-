import { makeTodoDiv } from "./todoMaker";
import parseISO from "date-fns/parseISO";

const LSobjectSetter = (dataBase) => {

    if (dataBase.length > 0) {
        
        for (let i = 0; i < dataBase.length; i++) {
            
            window.localStorage.setItem(`todoObject${i}`, JSON.stringify(dataBase[i]));
        };
    };
};

const LSobjectDivPopulator = () => {
    
    if (window.localStorage.length > 0) {
        
        for (let i = 0; i < window.localStorage.length; i++) {
            
            const parsedTodoObject = JSON.parse(window.localStorage.getItem(`todoObject${i}`));
            parsedTodoObject.dueDate = new Date(parseISO(parsedTodoObject.dueDate));

            makeTodoDiv(parsedTodoObject);
        };
    };
};

export {LSobjectSetter, LSobjectDivPopulator};