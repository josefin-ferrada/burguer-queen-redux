import { SET_TO_RESUME } from './actionTypes'

 export const setResume = dispatch => () =>{
     dispatch({
        type: SET_TO_RESUME,
        payload: ""
     })
 }