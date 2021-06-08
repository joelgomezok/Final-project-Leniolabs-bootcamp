import React from 'react';
import './App.css';

import HerosCards from './components/Body/cards/herosCardsList';
import {Provider} from 'react-redux';
import generateStore from './redux/store';

function App() {

  const store = generateStore();
  return (
    <Provider store = {store}>
       <HerosCards />
    </Provider>
  );
}

export default App;
