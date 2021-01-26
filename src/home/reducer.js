import { CHANGESWITCH } from "./actionTypes.js"
const defaultstate = {
  //1- checked:localStorage.getItem('checked') === "true" ? true : false
  // 2-
  checked:JSON.parse(localStorage.getItem('checked'))
}

const reducer = (state=defaultstate,action) => {
  switch (action.type) {
    case CHANGESWITCH:
      return {
        checked:action.checked
      }
    default:
      return state;
  }
}

export default reducer