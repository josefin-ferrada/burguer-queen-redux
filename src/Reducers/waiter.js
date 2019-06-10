import { SET_TO_RESUME } from  "../actions/actionTypes";

export default (
  state = {//estado inicial o default cuando el usuario no pone los parametros
    id: "defecto",
    name: "defecto",
    value: 0
  },
  action//viene de action file
) => {
  switch(action.type){
    case SET_TO_RESUME:
      return {
      ...state,//pemite copiar estado anterior y cuando le ponga coma sobreescribo el estado anterior
              //sin modificar el estado anterior a mano
      date: new Date(),
      id: "",
      cant: "",
      name: "",
      value: "",
      
        
      }
    
    default: return state;//siempre poner default 
  }
}