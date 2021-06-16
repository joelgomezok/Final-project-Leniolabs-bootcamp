import {
    GET_HEROS,
    GET_HEROS_ERROR,
} from "../actionTypes/heros";

const initialState = {
    array: [],
    error: false,
};

export default function herosReducer(state = initialState , action){
    switch (action.type) {
        case GET_HEROS:
            return {...state, array: action.payload}
        case GET_HEROS_ERROR:
            return {...state, array:[], error: action.payload.error}
        default:
            return state    
    }
};
