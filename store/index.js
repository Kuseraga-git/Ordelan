import { combineReducers, createStore } from 'redux';
import PersonnageReducer from "../reducers/PersonnageReducer";
import PantheonReducer from "../reducers/PantheonReducer";

const store = createStore(
    combineReducers(
        {
            // variable: nameReducer,
            PersonnageReducer, PantheonReducer,
        }
    )
);

export default store;