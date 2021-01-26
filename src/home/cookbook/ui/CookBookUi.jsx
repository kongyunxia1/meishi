import React from "react";
// prop-types进行类型验证
import  PropTypes  from  'prop-types' 
import memoize from "memoize-one";


import Search from "../../../components/search/Search";
import HotCate from "./HotCate";
import Swiper from "./Swiper";
import Topten from "./Topten";

import { Container } from "./StyledCookBook.js";

const CookbookUi = (props) => {
  // memoize在函数组件中使用,相当于计算属性的作用；（缓存，可以减少渲染的复杂度，优化性能）
  // 轮播图筛选出5条数据,精品菜单筛选出10条数据
  const swiper = memoize((list) => {
    return list.slice(0,5)
  })
  const topten = memoize((list) => {
    return list.slice(0,10)
  })
  /*测试运行结果
   const filterSwiper = swiper(props.list)
  console.log(filterSwiper) */

  return (
    <Container>
        <header>美食大全</header>
        <Swiper list={swiper(props.list)} /> 
        <Search 
          outerbg="#f5f5f9"
          innerbg="#fff"
          hasborder={true}
        />
        <HotCate />
        <Topten list={topten(props.list)}/>
    </Container>
  )
}
// 函数组件，类型验证，挂载到函数上(函数式组件绑定类型验证)
CookbookUi.propTypes= {
  list:PropTypes.array
}

export default CookbookUi