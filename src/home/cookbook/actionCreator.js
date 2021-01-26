import { LOADDATA } from "./actionTypes.js";
import { getList } from "../utils/http.js";


// 调接口，请求数据

// 同步
const loadDataSync = (list) => {
  return {
    type:LOADDATA,
    list
  }
  // list:拿到的126条数据
}
// 异步,请求数据
const loadDataAsync = () => {
  return async(dispatch) => {
    
    let result =  await getList("/api/list")
    
    console.log(11111111111111,result)
    dispatch(loadDataSync(result.data.data))
  }
}


export{
  loadDataSync,
  loadDataAsync
}
