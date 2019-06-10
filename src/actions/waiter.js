import { SET_TO_RESUME } from './actionTypes'

 export const setResume = dispatch => (name, id, value, cant) =>{
     dispatch({
        type: SET_TO_RESUME,
        order : {
            
            nameUnit: name,
            identify : id,
            price: value,
            howMany: cant
        }
     })
 }