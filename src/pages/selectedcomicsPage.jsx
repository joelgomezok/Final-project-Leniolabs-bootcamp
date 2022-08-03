import React from "react";
import NavbarSearch from "../components/Header/Navbar/navbar";
import Comic from "../components/Body/cards/selectedcomics";
import Loading from "../components/Loading";

const ComicsPage = () => {
  return (
    <React.Fragment>
       <header>
        <NavbarSearch/>
      </header>
      <div className= 'container' style={{padding:'0px 24px'}}>
        <Comic/> ? <Comic/> : <Loading/>
      </div>
    </React.Fragment>
  );
};
export default ComicsPage;
