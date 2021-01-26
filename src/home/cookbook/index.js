// 暴露的出口
import CookBook from "./container/CookBook.jsx";
import reducer from "./reducer.js"
import { loadDataSync,loadDataAsync } from "./actionCreator.js"



export {
  CookBook,
  reducer,
  loadDataSync,
  loadDataAsync,
}