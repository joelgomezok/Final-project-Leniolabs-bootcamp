import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import mainPage from './pages/mainPage';
import Footer from './components/Footer/footer';

function App() {

  return (

    <Router>
        <Switch>
          <Route exact path="/:heroName?" component={mainPage} />
        </Switch>
         <Footer />
    </Router>
  );
}

export default App;
