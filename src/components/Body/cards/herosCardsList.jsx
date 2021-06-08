import React from 'react';
import './styles.css';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {getHerosAction} from '/Users/Joel_/Desktop/project-final/src/redux/herosDuck'


const HerosCards = () => {
    const dispatch = useDispatch();
    const herosList = useSelector(store => store.heros.array);
    // console.log(herosList);
   
    useEffect(() => {
        dispatch(getHerosAction())           
    }, [dispatch])

    return ( 
    <div className="row row-cols-1 row-cols-md-4 g-4" style={{padding:'0% 3% 0% 8%', margin:'0%'}} > 
                                                                         {/* //buscar otra forma para centrarlo */}
       {herosList.map(hero =>(
        <div className="col"  key={hero.id}>
            <div className="shadows card" style={{width: '80%', height : '20rem'}}>
                <a href={hero.urls[0].url} target="_blank" rel="noopener noreferrer" >
                <img src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`} alt='' className="card-img-top" style={{width: '100%', height : '100%'}} />
                </a>
                <p>{hero.name}</p>
                {/* <button type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="bottom" title={hero.name}>
                {hero.name} </button> */}
            </div>
        </div>
       ))}
    </div>

)};
export default HerosCards;
