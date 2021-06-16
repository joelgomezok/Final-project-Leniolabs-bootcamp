import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from './pages/mainPage';
import CharacterDetails from './pages/characterDetails';
import ComicsPage from './pages/selectedcomicsPage';
import Footer from './components/Footer/footer';

function App() {

  return (

    <Router>
        <Switch>
          <Route exact path="/:heroName?" component={MainPage} />
          <Route exact path="/characterDetails/:characterId" component={CharacterDetails} />
          <Route exact path="/characterDetails/:characterId/comics/:comicId" component={ComicsPage} />
        </Switch>
         <Footer />
    </Router>
  );
}

export default App;
