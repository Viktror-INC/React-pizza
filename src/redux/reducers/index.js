import { combineReducers } from "redux";
import pizzasReducer from "./pizzas";
import { filters } from "./filter";

const rootReducer = combineReducers({
    pizzas: pizzasReducer, //- короткий запис, створюємо свойство pizzas і передаємо свойство pizzasReducer
    filters: filters
})

export default rootReducer;