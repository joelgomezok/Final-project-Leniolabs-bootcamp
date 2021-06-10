import React from 'react';
import './App.css';
import HerosCards from './components/Body/cards/herosCardsList';
import {Provider} from 'react-redux';
import generateStore from './redux/store';
import Navbars from './components/Header/Navbar/navbar';
import Footer from './components/Footer/footer';

function App() {

  const store = generateStore();
  return (
    <div>
          <div>
               <Navbars />
          </div>
          <div className='container'>
               <Provider  store = {store}>
                   <HerosCards />
               </Provider>
          </div>
          <div>
                <Footer />
          </div>

    </div>
  );
}

export default App;
