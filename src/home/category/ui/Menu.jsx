import React, { Component } from 'react';
import { getList } from '../../utils/http.js';
import MenuList from "../../../components/menulist/MenuList.jsx";
import PropTypes from "prop-types"

class Munu extends Component {
  constructor(props) {
    super(props);
    this.state = {  
      categorylist:null,
      curCate:this.props.type === "category" ? "热门" : "肉类",
      type:"category",
    }
  }
  static propTypes = {
    type:PropTypes.string
  }

   // 分类模块，请求数据
   async componentDidMount(){
    //console.log(this.props.type)
    const result = await getList("/api/category")
    // console.log(result.data.data)
    this.setState({
      categorylist:result.data.data
    })
  }
  // 组件更新了就会render,componentDidUpdate使用它会有递归的问题
  /* componentDidUpdate(){
  } */
  // 组件内部和外部都会发生改变;nextProp父组件传过来的值；preState原state的值
  static getDerivedStateFromProps(nextProps,preState){
    if(nextProps.type === preState.type){
      return null
    }else{
      return {
        curCate:nextProps.type === 'category' ? "热门" : "肉类",
        type:nextProps.type
      }
    }  
  }
  // 点击左侧分类，当前选中的分类高亮
  handleAsideClick = (curCate) => {
    
    return () => {
      //console.log(curCate)   //点击后选中的分类
      this.setState({
        curCate:curCate,
      }) 
    }
  }

  render() { 
    const {categorylist,curCate} = this.state
    const {type} = this.props
    console.log(categorylist && categorylist[type])
    return ( 
      <MenuList
       categorylist={categorylist && categorylist[type]}
       curCate = {curCate}
       handleAsideClick = {this.handleAsideClick}
      ></MenuList>
      
        
    );
  }
}

export default Munu;