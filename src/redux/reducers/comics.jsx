import {
  GET_COMICS,
  GET_COMICS_ERROR,
} from '../actionTypes/comics';

const initialState = {
	array: [],
	error: false,
};

export default function comicsReducer(state = initialState , action) {
	switch (action.type) {
		case GET_COMICS:
			return {...state, array: action.payload}
		case GET_COMICS_ERROR:
			return {...state, array:[], error: action.payload}
		default:
			return state    
	}
};
