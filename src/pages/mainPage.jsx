import React from "react";
import HerosCards from "../components/Body/cards/herosCardsList";
import NavbarSearch from "../components/Header/Navbar/navbar";

const mainPage = () => {
  return (
    <React.Fragment>
      <NavbarSearch></NavbarSearch>
      <div className= 'container'>
        <HerosCards></HerosCards>
      </div>
    </React.Fragment>
  );
};

export default mainPage;
