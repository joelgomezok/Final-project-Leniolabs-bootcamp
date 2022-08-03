import React from 'react';
import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getHerosAction} from '../../../redux/heros';
import {Link, useLocation} from "react-router-dom";

const HerosCards = () => {
    const dispatch = useDispatch();
    const herosList = useSelector(store => store.heros.array);
    const location = useLocation();
    const [name] = useState(location.pathname.substr(1));

    useEffect(() => {
          dispatch(getHerosAction(name));
    }, [dispatch, name]);

    return ( 
        <div className="container row row-cols-1 row-cols-md-4 g-4" style={{padding:'0%', margin:'0%', marginTop:'5%'}}>                                                                
            {herosList.map(hero =>(
                <div className="col"  key={hero.id}>
                    <div className="shadows card" style={{width: '100%', height : '18rem'}}>
                    <Link to={`/${hero.name}/${hero.id}/comics`}>
                        <img src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`} alt='' className="card-img-top" style={{width: '100%', height : '100%'}} />
                    </Link>
                        <p className="cardsName" style={{margin:'0px'}}>{hero.name}</p>
                    </div>
                </div>
            ))}
        </div>       
    );        
    
};
export default HerosCards;