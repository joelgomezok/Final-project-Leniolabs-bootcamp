import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getSelectedComics } from "../../../redux/selectedComics";
import { useDispatch, useSelector } from "react-redux";

const Comic = () => {
  const { comicId } = useParams();
  const dispatch = useDispatch();
  const comic = useSelector(store => store.selectedComics.array);

  useEffect(() => {
    dispatch(getSelectedComics(comicId));
  }, [dispatch, comicId]);

    return (

      <div className="container card mb-3" style={{padding:'0%', margin:'0%'}}> 
                                                                        
            {comic.map((comics, i) =>(
            <div className="shadows row g-0" style={{padding:'3%', margin:'3%'}}  key={comics.id}>
                <div className="  col-md-4" style={{width: '50vh', height : '80vh'}}>
                    <img src={`${comics.thumbnail.path}.${comics.thumbnail.extension}`} alt='' className="card-img-top" style={{width: '100%', height : '100%'}} />
                </div>
                <div className="col-md-8">
                  <div className="card-body" style={{padding:'0% 5%'}}>
                    <h3 className="card-title" style={{margin:'0px'}}> {comics.title} </h3>
                    <br />
                    <h5 className="card-text" > Release date: {new Date(comics.dates[i].date).toLocaleDateString()} </h5>                
                    <p className="card-text" style={{margin:'0px'}}> {comics.description} </p>
                  </div>
                </div>
            </div>
            ))}
       </div>  
  );
};
export default Comic;