import React, { Component } from 'react';
import {withRouter} from "react-router-dom"
import {connect} from "react-redux"
import { NavBar, Icon } from 'antd-mobile';
import {ListWrap} from './StyledList.js'
import { loadDataSync,loadDataAsync } from "../home/cookbook/index.js"

// 
@connect(
  (state) => ({
    list:state.cookbook.list
  }),
  (dispatch) => ({
    loadData(){
      dispatch(loadDataAsync())
    }
  })
)
class List extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  componentDidMount(){
    // 解决刷新redux数据丢失的问题
    if(this.props.list.length === 0){
      this.props.loadData()
    }
  }

  handleClickLeft = () => {
    console.log(this.props)
    const {history} = this.props
    history.goBack()
  }
  

  render() { 
    return (  
      <ListWrap>
        <NavBar
          mode="light"
          icon={<Icon type="left" style={{color:"#fff"}}/>}
          onLeftClick={() => console.log('onLeftClick')}
          onLeftClick={this.handleClickLeft}
        >
          {this.props.location.state.title}
        </NavBar>
        <ul>
          {
            this.props.list.map((li,i) => (
              <li key={li.id + i}>
                <div>
                  <img 
                  src={li.img}
                  
                  alt="美食"
                  style={{width:"1.15rem",height:"0.8rem"}}
                  />
                </div>
                <div>
                  <h3>{li.name}</h3>
                  <h4>{li.burdens}</h4>
                  <h5>{li.all_click}浏览  {li.favorites}收藏</h5>
                </div>
              </li>
            ))
          }

          
        </ul>
        
      </ListWrap>
    );
  }
}
 
export default withRouter(List);


/* 

*/