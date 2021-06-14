import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getSelectedComics } from "../../../redux/selectedComicsDuck";
import { useDispatch, useSelector } from "react-redux";



const Comic = () => {
  const { comicId } = useParams();
  const dispatch = useDispatch();
  const comic = useSelector(store => store.selectedComics.array);

  useEffect(() => {
    dispatch(getSelectedComics(comicId));
  }, [dispatch, comicId]);


  
    return (
      
      <div className="container row row-cols-1 row-cols-md-4 g-4" style={{padding:'0%', margin:'0%'}}> 
                                                                        
          {comic.map((comics, i) =>(
          <div className="col"  key={comics.id}>
              <div className="shadows card" style={{width: '100%', height : '16rem'}}>
                  <img src={`${comics.thumbnail.path}.${comics.thumbnail.extension}`} alt='' className="card-img-top" style={{width: '100%', height : '100%'}} />
                  <div>
                      <h3 style={{margin:'0px'}}>{comics.title} </h3>
                      <p> {new Date(comics.dates[i].date).toLocaleDateString()} </p>
                      <p style={{margin:'0px'}}>{comics.description}</p>
                  </div>
              </div>   
          </div>
          ))}
      </div>

  );
};
export default Comic;