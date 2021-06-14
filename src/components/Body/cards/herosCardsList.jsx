import React from 'react';
import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getHerosAction} from '../../../redux/herosDuck';
import {Link, useLocation } from "react-router-dom";





const HerosCards = () => {
    const dispatch = useDispatch();
    const herosList = useSelector(store => store.heros.array);
    const location = useLocation();
    const [name] = useState(location.pathname.substr(1));

    useEffect(() => {
          dispatch(getHerosAction(name));
    }, [dispatch, name]);

    return ( 
    <div className="container row row-cols-1 row-cols-md-4 g-4" style={{padding:'0%', margin:'0%'}}> 
                                                                        
       {herosList.map(hero =>(
        <div className="col"  key={hero.id}>
            <div className="shadows card" style={{width: '100%', height : '18rem'}}>
             <Link to={`/characterDetails/${hero.id}`}>
                <img src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`} alt='' className="card-img-top" style={{width: '100%', height : '100%'}} />
             </Link>
                <p style={{margin:'0px'}}>{hero.name}
                </p>
                <button type="button" className=" btn btn-transparent "style={{color: "gray"}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="star-card bi bi-star" viewBox="0 0 16 16">
                      <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
                    </svg>            
                </button>
            </div>
        </div>
       ))}
    </div>
    )         
};
export default HerosCards;