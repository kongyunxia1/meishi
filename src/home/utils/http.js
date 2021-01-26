import axios from "axios";

export const getList = (url) => {
  return new Promise((resolve,reject) => {
    axios.get(url)
    .then((result) => {
      // console.log(55555555555555555,result)
      resolve(result)
    })
    .catch((error) => {
      reject(error)
    })
  })
}

