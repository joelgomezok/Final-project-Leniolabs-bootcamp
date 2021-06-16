import axios from "axios";
import {
  GET_COMICS,
  GET_COMICS_ERROR,
} from './actionTypes/comics';

export const getComicsAction = (id) => async (dispatch) => {
  const md5 = require ('md5');                                               
  const APIKeyPrivate = "db624a72a76d181be4d200bafcb422237a07e3e9";
  const APIKeyPublic = "6658de89c9628f0521d5a33849d853e5"; 
  const Hash = md5("1" + APIKeyPrivate + APIKeyPublic);
  const characterId = id;
  const ComicsURL = `https://gateway.marvel.com:443/v1/public/characters/${characterId}/comics?orderBy=onsaleDate&limit=96&ts=1&apikey=6658de89c9628f0521d5a33849d853e5&hash=${Hash}`; 
  
  try {
    const res = await axios.get(`${ComicsURL}`);
    dispatch({
      type: GET_COMICS,
      payload: res.data.data.results
    });
  } catch (error) {
    dispatch({
      type: GET_COMICS_ERROR,
      payload: true
    });
  }
};
