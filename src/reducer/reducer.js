import {INCREAMENT,DECREAMENT} from "../constant"
const initialstate = 0;

const reducerFun = (state=initialstate,action) => {
      switch(action.type){
        case INCREAMENT : return state + 1;
        case DECREAMENT : {
            if(state > 0)  { 
                return state - 1 ;
            }
        }
        default : return state;
      }
}

export default reducerFun ;