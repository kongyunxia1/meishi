import React from 'react';
import { NavBar, Icon  } from 'antd-mobile';
import {TitleBar} from "./StyledMore.js"

const Map = () => {

  return (
    <TitleBar
    style={{width:"100%",height:"100%"}}
    >
      <NavBar
        mode="light"
        icon={<Icon type="left" style={{color:"#fff"}}/>}
        onLeftClick={() => console.log('onLeftClick')}
      >美食地图</NavBar> 
      <iframe 
       style={{width:"100%",height:"100%"}}
       src="/map.html" 
       title="ifrm" 
       frameBorder="0"
      >
      </iframe>
    </TitleBar>
  )
}

export default Map