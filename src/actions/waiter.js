import { SET_TO_RESUME, DELETE_RESUME } from './actionTypes';
import store from './../Store'; 

 export const setResume = dispatch => (name, id, value, cant) =>{
    console.log(store.getState())
     dispatch({
        type: SET_TO_RESUME,
        payload : {
            
            nameUnit: name,
            identify : id,
            price: value,
            howMany: cant
        }
     })
 }

 export const deleteResume = dispatch => (id) =>{
     dispatch({
         type: DELETE_RESUME,
         payload: {
             id
         }
     })
 }