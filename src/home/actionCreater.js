import { CHANGESWITCH } from "./actionTypes.js"

const changeSwitch = (checked) => {
  return {
    type:CHANGESWITCH,
    checked:checked
  }
}
export {
  changeSwitch
}