import { LOADDATA } from "./actionTypes.js";

const defaultstate={
  list:[]
}

const reducer = (state=defaultstate,action) => {
  switch (action.type) {
    case LOADDATA:
      return {
        list:action.list
      }
      
  
    default:
      return state
  }
}
export default reducer