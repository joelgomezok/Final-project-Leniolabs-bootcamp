import React from "react";
import NavbarSearch from "../components/Header/Navbar/navbar";
import HerosComics from '../components/Body/cards/herosComicsList'
import Loading from "../components/Loading";

const CharacterDetails = () => {
  return (
    <React.Fragment>
      <header>
        <NavbarSearch/>
      </header>
      <div className= 'container' style={{padding:'0px 24px'}}>
        <HerosComics/> ? <HerosComics/> : <Loading/>
      </div>
    </React.Fragment>
  );
};
export default CharacterDetails;
