import React from 'react';
import PropTypes from "prop-types"

import {ToptenWrap} from "./StyledCookBook.js"

/* class Topten extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (  
      <ToptenWrap>
        <h3>精品好菜</h3>
        <ul>
          <li>
            <div>
              <img src="http:\/\/s1.cdn.jiaonizuocai.com\/videoImg\/201510\/1313\/561c9a314c8bb.jpg\/OTAweDYwMA" alt=""/>
            </div>
            <div>
              <p>xxxxx菜</p>
              <p><span>1000</span>浏览量  <span>100</span>收藏</p>
            </div>
          </li>
          <li>
            <div>
              <img src="http:\/\/s1.cdn.jiaonizuocai.com\/videoImg\/201510\/1313\/561c9a314c8bb.jpg\/OTAweDYwMA" alt=""/>
            </div>
            <div>
              <p>xxxxx菜</p>
              <p><span>1000</span>浏览量  <span>100</span>收藏</p>
            </div>
          </li>
          <li>
            <div>
              <img src="http:\/\/s1.cdn.jiaonizuocai.com\/videoImg\/201510\/1313\/561c9a314c8bb.jpg\/OTAweDYwMA" alt=""/>
            </div>
            <div>
              <p>xxxxx菜</p>
              <p><span>1000</span>浏览量  <span>100</span>收藏</p>
            </div>
          </li>
        </ul>
      </ToptenWrap>
    );
  }
} */

// 改装成函数组件
const Topten = (props) => {

  return (  
    <ToptenWrap>
      <h3>精品好菜</h3>
      <ul>
        
          {
            props.list.length>0 && props.list.map((value) => {
              return (
                <li key={value.id}>
                  <div>
                    <img src={value.img} alt="精品图"/>
                  </div>
                  <div>
                    <p>{value.name}</p>
                    <p><span>{value.all_click}</span>浏览量<span>{value.favorites}</span>收藏</p>
                  </div>
                </li>
              )
            })
          }  
      </ul>
    </ToptenWrap>
  );
}

// 类型验证
Topten.propTypes = {
  list:PropTypes.array
}
 
export default Topten;