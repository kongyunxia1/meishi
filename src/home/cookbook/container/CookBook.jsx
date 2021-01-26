import React, { Component } from 'react';
import CookbookUi from '../ui/CookBookUi.jsx';

import { connect } from "react-redux";
import { loadDataAsync } from '../actionCreator.js';

// 装饰器
@connect(
  (state) => {
    console.log(state)
    return {
      list:state.cookbook.list
    }
  },
  (dispatch) => ({
    loadData() {
      dispatch(loadDataAsync())  //派发方法
    }
  })
)

class CookBook extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  // 把数据传给UI组件，UI组件渲染
  render() { 
    const { list } = this.props
    return ( 
      <div>
        <CookbookUi 
          list={list}
        />
      </div>
    );
  }

  componentDidMount(){
    this.props.loadData()
    //console.log(this.props.list)  //126条数据,只有第一次可以拿到数据
  }
  componentDidUpdate(){
    console.log(this.props.list)  //126条数据
  }
}



export default CookBook;