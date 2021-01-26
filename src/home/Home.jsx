import React, { Component } from 'react';
import { connect } from "react-redux"
import { TabBar } from 'antd-mobile';
// 图片(图标)
import cookbook from "assets/images/cookbook.png"
import cookbookActive from "assets/images/cookbook-active.png"
import location from "assets/images/location.png"
import locationActive from "assets/images/location-active.png"
import menu from "assets/images/menu.png"
import menuActive from "assets/images/menu-active.png"
import more from "assets/images/more.png"
import moreActive from "assets/images/more-active.png"
// 组件
import CookBook from "./cookbook/container/CookBook";
import Category from './category/container/Category.jsx';
import Map from "./map/Map.jsx"
import More from "./more/container/More.jsx"


@connect(
  (state) => ({
    checked:state.home.checked
  })
)

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'cookbook',
      hidden: false,
      fullScreen: true,
    };
  }
  componentDidMount(){
    console.log(this.props.checked)
  }
  render() { 
    const tabItems = [
      <TabBar.Item
        title="美食大全"
        key="cookbook"
        icon={<div style={{
          width: '26px',
          height: '26px',
          background: `url(${cookbook}) center center /  26px 26px no-repeat`}}
        />
        }
        selectedIcon={<div style={{
          width: '26px',
          height: '26px',
          background: `url(${cookbookActive}) center center /  26px 26px no-repeat` }}
        />
        }
        selected={this.state.selectedTab === 'cookbook'}
        onPress={() => {
          this.setState({
            selectedTab: 'cookbook',
          });
        }}
        data-seed="logId"
      >

      <CookBook />  

      </TabBar.Item>,
      <TabBar.Item
        icon={
          <div style={{
            width: '22px',
            height: '22px',
            background: `url(${menu}) center center /  21px 21px no-repeat` }}
          />
        }
        selectedIcon={
          <div style={{
            width: '22px',
            height: '22px',
            background: `url(${menuActive}) center center /  21px 21px no-repeat` }}
          />
        }
        title="分类"
        key="category"
        selected={this.state.selectedTab === 'category'}
        onPress={() => {
          this.setState({
            selectedTab: 'category',
          });
        }}
        data-seed="logId1"
      >
        <Category></Category>
        {/* <div>category</div> */}

      </TabBar.Item>,
      <TabBar.Item
        icon={
          <div style={{
            width: '22px',
            height: '22px',
            background: `url(${location}) center center /  21px 21px no-repeat` }}
          />
        }
        selectedIcon={
          <div style={{
            width: '22px',
            height: '22px',
            background: `url(${locationActive}) center center /  21px 21px no-repeat` }}
          />
        }
        title="美食地图"
        key="map"
        selected={this.state.selectedTab === 'map'}
        onPress={() => {
          this.setState({
            selectedTab: 'map',
          });
        }}
      >
        <Map />

      </TabBar.Item>,
      <TabBar.Item
        icon={{ uri: more }}
        selectedIcon={{ uri: moreActive }}
        title="更多"
        key="more"
        selected={this.state.selectedTab === 'more'}
        onPress={() => {
          this.setState({
            selectedTab: 'more',
          });
        }}
      >
        <More />
      </TabBar.Item>
    ]
      
      return (
        <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 400 }}>
          <TabBar
            unselectedTintColor="#949494"
            tintColor="#000"
            barTintColor="white"
            hidden={this.state.hidden}
          >
            {
              this.props.checked 
              ? tabItems.map((v) => v)
              : tabItems.filter((v,i) => i !== 2)
              
            }
          </TabBar>
        </div>
      );
    
  }
}
 
export default Home;