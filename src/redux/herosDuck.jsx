import axios from "axios";

//const
const initialDate = {
    array : [],
    offset: 0
}

//types
const GET_HEROS = 'GET_HEROS'
//const GET_HEROS_ERROR = 'GET_HEROS_ERROR'

//reducer
export default function herosReducer(state = initialDate , action){
    switch (action.type) {
        case GET_HEROS:
            return {...state, array: action.payload}
        default:
            return state    
    }
}
//actions
export const getHerosAction = () => async (dispatch) => {
    

const md5 = require ('md5');                                                   
const BaseURL = 'https://gateway.marvel.com:443/v1/';
const APIKeyPrivate = "db624a72a76d181be4d200bafcb422237a07e3e9";
const APIKeyPublic = "6658de89c9628f0521d5a33849d853e5"; 
const Hash = md5("1" + APIKeyPrivate + APIKeyPublic);
const URL = BaseURL + "public/characters?limit=20&offset=0&ts=1&orderBy=name&apikey=" + APIKeyPublic + "&hash=" + Hash;
//orderBy=name&
 try {
     const res= await axios.get(`${URL}`)
     dispatch({
         type: GET_HEROS,
         payload: res.data.data.results
     })
 } catch (error) {
     console.log('error');
     
 }
}