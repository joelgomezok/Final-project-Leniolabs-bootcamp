import axios from "axios";

//const
const initialState = {
    array: [],
  };

//types
const GET_SELECTED_COMICS = 'GET_SELECTED_COMICS'
const GET_SELECTED_COMICS_ERROR = 'GET_SELECTED_COMICS_ERROR'


//reducer
export default function selectedComicsReducer(state = initialState , action){
    switch (action.type) {
        case GET_SELECTED_COMICS:
            return {...state, array: action.payload}
        case GET_SELECTED_COMICS_ERROR:
            return {...state, array:[], error: action.payload.error}
        default:
            return state    
    }
}

//actions
export const getSelectedComics = (id) => async (dispatch) => {
 
        const md5 = require ('md5');
        const APIKeyPrivate = "db624a72a76d181be4d200bafcb422237a07e3e9";
        const APIKeyPublic = "6658de89c9628f0521d5a33849d853e5"; 
        const Hash = md5("1" + APIKeyPrivate + APIKeyPublic);
        const comicId = id;
        const getComics = `http://gateway.marvel.com/v1/public/comics/${comicId}?&orderBy=onsaleDate&limit=96&ts=1&apikey=6658de89c9628f0521d5a33849d853e5&hash=${Hash}`; 
        try {
          const res = await axios.get(`${getComics}`);

          dispatch({
              type: GET_SELECTED_COMICS,
              payload:res.data.data.results
          });
        } catch (error) {
          const res= await axios.get(`${getComics}`);
          dispatch({
              type: GET_SELECTED_COMICS_ERROR,
              payload: res.data.data.results
          });
        }
      };