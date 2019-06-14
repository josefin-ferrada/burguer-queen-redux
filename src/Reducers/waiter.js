import { SET_TO_RESUME, DELETE_RESUME } from  "../actions/actionTypes";


export default (
  state = {
    order: []
  },
  action//viene de action file
) => {
  switch(action.type){

    case SET_TO_RESUME:
      return {
        ...state,
        order: state.order.concat([action.payload])
      }
      case DELETE_RESUME:
        return {
          ...state,
        order: state.order.filter((order) => order.id !== action.id) /* state.order.filter((order) => order.id !== action.id) */
        
        }

    default: return state;//siempre poner default 
  }
}