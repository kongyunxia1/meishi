import styled from "styled-components"

const TitleBar = styled.div`
  .am-navbar{
    background-color:#ee742f;
  }
  .am-navbar-light .am-navbar-title {
    color: #fff; 
    font-size:0.2rem;
  }
`

const MoreWrap = styled.div`
  padding:.2rem;
  display:flex;
  justify-content: flex-start;
  align-items: center;
`

export {
  MoreWrap,
  TitleBar
}