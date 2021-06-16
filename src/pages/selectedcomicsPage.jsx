import React from "react";
import NavbarSearch from "../components/Header/Navbar/navbar";
import Comic from "../components/Body/cards/selectedcomics";
const ComicsPage = () => {
  return (
    <React.Fragment>
      <NavbarSearch> </NavbarSearch>
      <div className= 'container' style={{padding:'0px 24px'}}>
        <Comic> </Comic>
      </div>
    </React.Fragment>
  );
};
export default ComicsPage;
