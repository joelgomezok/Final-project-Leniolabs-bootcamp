import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import herosReducer from './herosDuck';
import comicsReducer from './comicsDuck';
import selectedComicsReducer from './selectedComicsDuck';

const rootReducer = combineReducers({
    heros: herosReducer,
    comics: comicsReducer,
    selectedComics: selectedComicsReducer,
    // futuros reducers para combinar
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore() {
    const store = createStore( rootReducer, composeEnhancers( applyMiddleware(thunk) ) )
    return store;
}