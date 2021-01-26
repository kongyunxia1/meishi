import React from 'react';
import { CategoryWrap } from "./StyledCategory.js"
import Search from "../../../components/search/Search.jsx"
import Munu from "./Menu.jsx";

const CategoryUi = (props) => {
  const {tabIndex,type} = props
  return (  
    <CategoryWrap>
      <nav>
        <ul>
          <li onClick={props.handleClick(0)}
           className={tabIndex===0 ? "active" : ""}
           >分类</li>
          <li onClick={props.handleClick(1)}
            className={tabIndex===1 ? "active" : ""}
          >食材</li>
          <li className={tabIndex===0 ? "slide" : "slide right"}
          ></li>
        </ul>
      </nav> 
      <Search 
        outerbg="#fff"
        innerbg="#eee"
        hasborder={false}
      /> 
      <Munu 
        type={type}
      />
    </CategoryWrap>
  );
}

export default CategoryUi