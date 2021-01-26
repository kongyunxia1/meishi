import styled from "styled-components"

const ListWrap = styled.div`
  height:100%;
  display:flex;
  flex-direction:column;

.am-navbar{
  background-color: rgb(238, 116, 47)  
  
}
.am-navbar-title{
  color:#fff;
}
ul{
  flex:1;
  overflow-y:scroll;
  li{
    display:flex;
    padding:.1rem;
    background-color:#fff;
    border-bottom:1px solid #cecece;
  }
  img{
    margin-right:0.15rem;
  }
  h3{
    font-size:0.16rem;
    line-height:.3rem;  
  }
  h4{
    font-size:0.14rem; 
    line-height:.2rem;
    padding-right:0.1rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 240px; 
  }
  h5{
    font-size:0.12rem; 
    line-height:.3rem;  
  }  
}

`

export {
  ListWrap
}