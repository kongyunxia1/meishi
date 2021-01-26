// 合并reducer
import { combineReducers } from "redux";

import {reducer as cookbook} from "../cookbook";
import {reducer as home} from "../index.js"

const reducer =  combineReducers({
  cookbook:cookbook,
  home:home,
})

export default reducer
