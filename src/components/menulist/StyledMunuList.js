import styled from "styled-components";

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
        color:#ee742f;
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
  MunuWrap
}