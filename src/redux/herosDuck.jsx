import axios from "axios";

//const
const initialState = {
    array: [],
  };

//types
const GET_HEROS = 'GET_HEROS'
const GET_HEROS_ERROR = 'GET_HEROS_ERROR'

//reducer
export default function herosReducer(state = initialState , action){
    switch (action.type) {
        case GET_HEROS:
            return {...state, array: action.payload}
        case GET_HEROS_ERROR:
            return {...state, array:[], error: action.payload.error}
        default:
            return state    
    }
}
//actions
export const getHerosAction = (name) => async (dispatch) => {

    const md5 = require ('md5');                                                   
    const BaseURL = 'https://gateway.marvel.com:443/v1/';
    const APIKeyPrivate = "db624a72a76d181be4d200bafcb422237a07e3e9";
    const APIKeyPublic = "6658de89c9628f0521d5a33849d853e5"; 
    const Hash = md5("1" + APIKeyPrivate + APIKeyPublic);
    let URL;
    const randomNumber = Math.round(Math.random() * 1493)

    if (name.trim() !== "") {
        URL = `${BaseURL}public/characters?limit=50&offset=0&ts=1&orderBy=name&nameStartsWith=${name}&apikey=6658de89c9628f0521d5a33849d853e5&hash=${Hash}`;
      } else {
         URL = `${BaseURL}public/characters?limit=50&offset=${randomNumber}&ts=1&orderBy=name&apikey=6658de89c9628f0521d5a33849d853e5&hash=${Hash}`;
      }
      try {
        const res= await axios.get(`${URL}`);
        dispatch({
            type: GET_HEROS,
            payload:res.data.data.results
        });
      } catch (error) {
        const res= await axios.get(`${URL}`);
        dispatch({ 
            type: GET_HEROS_ERROR,
            payload: res.data.data.results
        });
      }
    }

