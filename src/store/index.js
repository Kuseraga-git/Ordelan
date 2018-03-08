import { combineReducers, createStore } from 'redux';
import PersonnageReducer from "../reducers/PersonnageReducer";

const store = createStore(
    combineReducers(
        {
            // variable: nameReducer,
            personnage: PersonnageReducer,
        }
    )
)

export default store;