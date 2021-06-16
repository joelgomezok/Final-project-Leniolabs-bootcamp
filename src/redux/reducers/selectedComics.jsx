import {
  GET_SELECTED_COMICS,
  GET_SELECTED_COMICS_ERROR,
} from '../actionTypes/selectedComics';

const initialState = {
  array: [],
	error: false,
};

export default function selectedComicsReducer(state = initialState , action){
	switch (action.type) {
		case GET_SELECTED_COMICS:
			return {...state, array: action.payload}
		case GET_SELECTED_COMICS_ERROR:
			return {...state, array: [], error: action.payload}
		default:
			return state
	}
};
