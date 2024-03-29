import React, {useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link, useRouteMatch } from "react-router-dom";
import {useDispatch, useSelector } from "react-redux";
import {getComicsAction} from '../../../redux/comics';

const HerosComics = () => {
  const {characterId} = useParams();
  const dispatch = useDispatch();
  const comicsList = useSelector(store => store.comics.array);

  useEffect(() => {
     dispatch(getComicsAction(characterId));
  }, [dispatch, characterId]);

  let {url} = useRouteMatch();
  return (
    <div className="container card mb-3" style={{padding:'0%', margin:'0%'}}> 
                                                                        
            {comicsList.map(comics =>(
            <div className="shadows row g-0" style={{padding:'3%', margin:'0% 0% 3% 0%'}}  key={comics.id}>
                <div className="  col-md-4" style={{width: '50vh', height : '50vh'}}>
                <Link to={`${url}/comics/${comics.id}`}>
                    <img src={`${comics.thumbnail.path}.${comics.thumbnail.extension}`} alt='' className="card-img-top" style={{width: '100%', height : '100%'}} />
                </Link>
                    {/* <button type="button" className=" btn btn-transparent "style={{color: "gray"}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="star-card bi bi-star" viewBox="0 0 16 16">
                        <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
                        </svg>            
                    </button> */}
                </div>
                <div className="col-md-8">
                  <div className="card-body" style={{padding:'0% 5%'}}>
                    <h3 className="card-title" style={{margin:'0px'}}> {comics.title} </h3>
                    <br />
                    <p className="card-text" style={{margin:'0px'}}> {comics.description} </p>
                  </div>
                </div>
            </div>
            ))}
    </div>  
  );
};
export default HerosComics;