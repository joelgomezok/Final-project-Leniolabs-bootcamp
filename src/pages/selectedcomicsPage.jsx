import React from "react";
import NavbarSearch from "../components/Header/Navbar/navbar";
import Comic from "../components/Body/cards/selectedcomics";
const ComicsPage = () => {
  return (
    <React.Fragment>
      <NavbarSearch> </NavbarSearch>
      <div className= 'container body'>
        <Comic> </Comic>
      </div>
    </React.Fragment>
  );
};
export default ComicsPage;
