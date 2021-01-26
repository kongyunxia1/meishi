import styled from "styled-components"

const Container = styled.div`
  background-color: ${(props) => props.outerbg};;
  padding:.1rem .15rem;
  div{
    display:flex;
    justify-content:center;
    align-item:center;
    height:.4rem;
    border:${(props) => props.hasborder ? "1px solid #ee742f" : ""};
    background-color:${(props) => props.innerbg};
    
    i{
      img{
        margin-top:.1rem;
        margin-right:.1rem;
        width:.2rem;
        height:.2rem;
      }
    }
    span{
      margin-top:.1rem;
      color:#666;
    }
  }

`

export{
  Container
}