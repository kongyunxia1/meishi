import React from 'react';
import { MunuWrap } from "./StyledMunuList.js";
import PropTypes from "prop-types"

const MunuList = (props) => {
  const { categorylist,curCate } = props
  return (  
    <MunuWrap>
      <aside>
        <ul>
          {
            categorylist && Object.keys(categorylist).map((value) => {
              return (
                <li className={curCate === value ? "active" : ""}
                  key={value}
                  onClick={props.handleAsideClick(value)}  
                >
                  <span>{value}</span>
                </li>
              )
            })
          }
        </ul>
      </aside>
      <section>
        <ul>
          {
            categorylist && categorylist[curCate].map((value) => {
              return (
                <li>{value}</li>
              )
            })
          }  
        </ul>
      </section>
    </MunuWrap>
  );
}
MunuList.propTypes = {
  categorylist:PropTypes.func,
  curCate:PropTypes.string,
}
export default MunuList;
/* class MunuList extends Component {
  constructor(props) {
    super(props);
    this.state = {  
      categorylist:null,
      curCate:"热门",
    }
  }

   // 分类模块，请求数据
   async componentDidMount(){
    const result = await getList("/api/category")
    console.log(result.data.data)
    this.setState({
      categorylist:result.data.data
    })
  }
  // 点击左侧分类，当前选中的分类高亮
  handleAsideClick = (curCate) => {
    return () => {
      this.setState({
        curCate:curCate,
      })
    }
  }

  render() { 
    const {categorylist,curCate} = this.state
    return (  
      <MunuWrap>
        <aside>
          <ul>
            {
              categorylist && Object.keys(categorylist['category']).map((value) => {
                return (
                  <li className={curCate === value ? "active" : ""}
                  >
                    <span onClick={this.handleAsideClick(value)}>{value}</span>
                  </li>
                )
              })
            }
          </ul>
        </aside>
        <section>
          <ul>
            {
              categorylist && categorylist['category'][curCate].map((value) => {
                return (
                  <li>{value}</li>
                )
              })
            }  
          </ul>
        </section>
      </MunuWrap>
    );
  }
} */
 
