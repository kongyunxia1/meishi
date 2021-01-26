import React, { Component } from 'react';
import { connect } from "react-redux"
import { Switch,NavBar, Icon  } from 'antd-mobile';
import { MoreWrap,TitleBar } from "./StyledMore.js"
import {changeSwitch} from "../../index.js"

@connect(
  (state) => ({
    checked:state.home.checked
  }),
  (dispatch) => ({
    handleChange(checked){
      dispatch(changeSwitch(checked))
      // 改变存储，把checked存起来
      localStorage.setItem('checked',checked)
    }
  })
)

class More extends Component {
  constructor(props) {
    super(props);
    this.state = {  
      // checked:true,
    }
  }
  // 改变开关状态
 /*  handleChange = () => {
    this.setState({
      checked: !this.state.checked,
    });
  } */

  render() { 
    return (
      <TitleBar> 
        <NavBar
          mode="light"
          icon={<Icon type="left" style={{color:"#fff"}}/>}
          onLeftClick={() => console.log('onLeftClick')}
        >更多</NavBar> 
        <MoreWrap>
          <span>显示地图：</span>
          <Switch
          checked={this.props.checked}
          onChange={this.props.handleChange}
          ></Switch>
        </MoreWrap>
      </TitleBar>
    );
  }
}
 
export default More;