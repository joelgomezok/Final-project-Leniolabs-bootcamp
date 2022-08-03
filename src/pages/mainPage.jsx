import React from "react";
import HerosCards from "../components/Body/cards/herosCardsList";
import NavbarSearch from "../components/Header/Navbar/navbar";
import Loading from "../components/Loading";

const MainPage = () => {
  return (
    <>
      <NavbarSearch/>      
      <div className= 'container'>
        <HerosCards/> ? <HerosCards/> : <Loading/>
      </div>
    </>
  );
};

export default MainPage;
