Taller Redux 



thunk operaciones ascincronas

crear action timer.js--> 
export const startRedTimer= dispatch => redLightTime =>{
    const timer = setInterval(()=>{
        if(redLightTime)
        dispatch({
            type: START_TIMER_RED,
            payload: redLightTime--
        });
        else {
            clearInterval(TheTimer);
        }
    },1000)
}

crear action startTimer.js
index junta todas las acciones 
agregar a actionTypes 
timer para tres luces 


En mi componente 


crear reducer timer.js 
combinar en index.js

export default (
    state = {
        redLightTimer: 0,
        yellowLightTimer : 0,
        greennLightTimer : 0
    }, action ) => {
    switch ()
    }

