import styled from "styled-components";
// 安装 cnpm i styled-components --save
const Container = styled.div`
  header{
    height:.44rem;
    line-height:.44rem;
    text-align:center;
    font-size:.16rem;
    background-color:#ee742f;
    color:#fff;
  } 
`
const SwiperWrap = styled.div`
  height:0;
  font-siza:0;
  padding-bottom:66.666667%; 
`

const HotCateWrap = styled.div`
  h3{
    height:.5rem;
    padding-left:.1rem;
    color:#666;
    line-height:.5rem;
    background-color:#fff;
    border-bottom:1px solid #ccc;
  }  
  div{
    img{
      &[src='blank']{
        display:none;
      }
    }
  }
  .am-grid-item-content{
    padding:0 !important;
    display:flex;
    flex-direction:column;
    align-item:center;
    justify-content:center;
  }
`

const ToptenWrap = styled.div`
h3{
  height:.5rem;
  padding-left:.1rem;
  color:#666;
  line-height:.5rem;
}
ul{
  width:100%;
  display:flex;
  flex-wrap:wrap;
  padding-left:.1rem;
  li{
    width:50%;
    padding-right:.1rem;
    div:first-child{
      img{
        width:100%;
      }
    }
    div:last-child{
      height:.56rem;
      background-color:#fff;
      margin-bottom:.1rem;
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;
      p:first-child{
        font-size:.18rem;

      }
      p:last-child{
        color:#666;

      }
    }
  }
}
`

export{
  Container,
  SwiperWrap,
  HotCateWrap,
  ToptenWrap
}