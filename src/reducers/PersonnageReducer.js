// type actions
import { /* variable type */ } from '../types/PersonnagesTypes';

// initialState important !
const initialState = {
    Personnages: {
        1: {
            id: 1,
            name: 'default',
        }
    }
}

// reducers switch case
const PersonnagesReducer = (state = initialState, action) => {
    switch (action.type) {

    }
}

export default PersonnagesReducer;
