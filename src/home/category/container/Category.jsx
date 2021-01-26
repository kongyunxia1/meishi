import React, { Component } from 'react';

import CategoryUi from "../ui/CategoryUi.jsx"

class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {  
      tabIndex:0,
      categorylist:[],
      type:"category",    //点击"分类"/"食材"，进行切换menu
    }
  }
  handleClick = (index) => {
    return ()=>{
      this.setState({
        tabIndex:index,
        type: index===0 ? 'category' : 'material'
      })
    }
  }
  render() { 
    const { tabIndex,type } = this.state
    return (
      <CategoryUi 
      tabIndex={tabIndex}
      type={type}
      handleClick={this.handleClick}
      />
    )
  }
}
 
export default Category;