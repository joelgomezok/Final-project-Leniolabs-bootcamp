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
    <div className="container card mb-3" style={{padding:'0%', marginTop:'7%'}}> 
                                                                        
            {comicsList.map(comics =>(
            <div className="shadows row g-0" style={{padding:'3%', margin:'0% 0% 3% 0%'}}  key={comics.id}>
                <div className="  col-md-4" style={{width: '50vh', height : '50vh'}}>
                  <Link to={`${url}/${comics.id}`}>
                      <img src={`${comics.thumbnail.path}.${comics.thumbnail.extension}`} alt='' className="card-img-top" style={{width: '100%', height : '100%'}} />
                  </Link>
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