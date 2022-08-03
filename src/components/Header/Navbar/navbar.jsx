import React, {useState} from "react";
import {useHistory, Link} from "react-router-dom";
import {Nav, Form, NLink, Img, Input } from "./styled";
import logo from '../../../assets/icons/Marvel-Logo.png'
import FavouriteButton from './favouriteButton';


const NavbarSearch = () => {
  const [inputValue, setInputValue] = useState('');
  const history = useHistory();
  const searchHero = (e) => {
    setInputValue(e.target.value);
  };
  const submitHero = () => {
    history.push("/" + inputValue);
    setInputValue("");
  }

  return ( 
      <header>
        <Nav>  
            <Form  onSubmit={submitHero}>
                <NLink>
                    <Link to="/" >
                      <Img   src={logo}  alt="logo marvel"/>
                    </Link>
                </NLink>
                <Input
                    type='text' placeholder='Find the hero' 
                    value={inputValue} onChange={searchHero} 
                    aria-label='Search' 
                  />
                <FavouriteButton />
            </Form>
        </Nav>
      </header>  
 )
};
export default NavbarSearch;