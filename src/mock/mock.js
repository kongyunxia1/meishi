// 把需要数据引进来，然后暴露出去
// 数据引进来
// const hotcate = require("./cookbook-hotcate.json")

// 数据暴露出去
module.exports = () => {
  return {
    hotcate:require('./cookbook-hotcate.json'),
    list:require('./cookbook-list.json'),
    category:require('./cookbook-category.json'),
    detail:require('./cookbook-detail.json')
  }
}