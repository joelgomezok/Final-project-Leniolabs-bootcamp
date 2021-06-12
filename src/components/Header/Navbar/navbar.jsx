import React, {useState} from "react";
import './styles.css';
import {useHistory} from "react-router-dom";

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
    
        <nav className="navbar navbar-light">
           <div className='iconmarvel'>
              <img src="https://i.ibb.co/w7H3zKQ/marvel-logo-4.png"  alt="logo marvel" style={{width: '100px', height : '38px'}} />
           </div> 
          <form style={{width: '70%'}} onSubmit={submitHero}>
           <input className='form-control mr-sm-2' 
              type='text' placeholder='Search hero' 
              value={inputValue} onChange={searchHero} 
              aria-label='Search'
            />
          </form>
           <button type='button' className='btn'style={{color: 'gray', margin: '0% 10% 0% 0%'}}>
             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="star bi bi-star" viewBox="0 0 16 16">
               <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
             </svg>            
           </button>
        </nav>
        

 )
};
export default NavbarSearch;
