import React, { Component } from 'react';
import { Container } from "./StyledSearch.js";
import searchtu from "../../assets/images/search.png";
class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    // 接收父组件传过来的所有东西{...this.props}
    return (  
      <Container {...this.props}>
        <div>
          <i><img src={searchtu} alt=""/></i>
          <span>想吃什么搜这里，如川菜</span>
          

        </div>
      </Container>
    );
  }
}
 
export default Search;