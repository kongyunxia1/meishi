import styled from "styled-components";

const CategoryWrap = styled.div`
 height: 100%;
 display:flex;
 flex-direction:column;
 nav{
  height:.44rem;
  background-color:#ee742f;
  color:#fff;
  font-size:.18rem;
  display:flex;
  justify-content: center;
  align-items: center;
  ul{
    position: relative;
    display:flex;
    width:1.4rem;
    height:.3rem;
    border:1px solid #fff;
    border-radius: .15rem;
    li{
      
      flex:1;
      line-height:.3rem;
      text-align:center;
      transition:all 100ms ease-in;
    }
    .active{
      color:#ee742f;
      z-index:3;
    }
    .slide{
      position: absolute;
      left:0;
      width:.7rem;
      height:.3rem;
      background-color:#fff;
      border-radius: .15rem;
    }
    .right{
      position: absolute;
      left:.7rem;
    }
  }

 }
`

const MunuWrap = styled.div`
  border-top:1px solid #cecece;
  flex:1;
  display:flex;
  overflow: hidden;
  aside{
    overflow-y:scroll;
    width: .9rem;
    ul{
      li{
        
        height: .5rem;
        line-height:.5rem ;
        text-align: center;
        font-size:.14rem;
        
      }
      .active{
        background-color:#fff;
        span{
          display: inline-block;
          height: 100%;
          border-bottom:1px solid #ee742f;
        }
      }
    }
  }
  section{
    flex:1;
    padding:.15rem;
    background-color:#fff;
    font-size:.14rem;
    overflow-y:scroll;
    ul{
      display:flex;
      flex-wrap:wrap;
      li{
        width: 29.333%;
        height: .45rem;
        line-height: .45rem;
        text-align: center;
        border:1px solid #ddd;
        margin:5px 5px;
      }
    }
  }
`

export{
  CategoryWrap,
  MunuWrap
}