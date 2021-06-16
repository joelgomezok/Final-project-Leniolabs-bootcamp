import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import herosReducer from './reducers/heros';
import comicsReducer from './reducers/comics';
import selectedComicsReducer from './reducers/selectedComics';

const rootReducer = combineReducers({
	heros: herosReducer,
	comics: comicsReducer,
	selectedComics: selectedComicsReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore() {
	const store = createStore( rootReducer, composeEnhancers( applyMiddleware(thunk) ) )
	return store;
};
