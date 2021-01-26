import React from 'react';
import PropTypes from "prop-types"
import { Carousel } from 'antd-mobile';
/* import img1 from "assets/images/swiper-1.png";
import img2 from "assets/images/swiper-2.jpeg";
import img3 from "assets/images/swiper-3.jpeg"; */
// console.log(img1) 
import {SwiperWrap} from "./StyledCookBook.js"

/* class Swiper extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (  
      <SwiperWrap>
        <Carousel
         autoplay={true}
         infinite
         
        >
          <img src={img1} />
          <img src={img2} />
          <img src={img3} />
        </Carousel>
      </SwiperWrap>
    );
  }
} */
// 组装成函数组件，因为是个UI，只负责渲染，用函数组件较好
const Swiper = (props) => {

  return (  
    <SwiperWrap>
      <Carousel
       autoplay={true}
       infinite
      >
        {
          props.list.length>0 && props.list.map((value) => {
            return (
              <img key={value.id} src={value.img} alt="轮播图"/>
            )
          })
        }
      </Carousel>
    </SwiperWrap>
  );
} 

Swiper.propTypes = {
  list:PropTypes.array
}


export default Swiper