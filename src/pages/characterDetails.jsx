import React from "react";
import NavbarSearch from "../components/Header/Navbar/navbar";
import HerosComics from '../components/Body/cards/herosComicsList'

const CharacterDetails = () => {
  return (
    <React.Fragment>
      <NavbarSearch></NavbarSearch>
      <div className= 'container' style={{padding:'0px 24px'}}>
        <HerosComics></HerosComics>
      </div>
    </React.Fragment>
  );
};
export default CharacterDetails;
