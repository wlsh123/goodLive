import React, { Component } from 'react';
import './style.less'
class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    const data = this.props.data;
    return ( 
      <div className='clear-fix order-item-container'>
        <div className="order-item-img float-left">
          <img src={data.img} alt=""/>
        </div>
        <div className='order-item-comment float-right'>
          {
            data.commentState == 0 ?
              <button className='btn'>评价</button>:
              <button className='unselected-btn btn'>已评价</button>
          }
        </div>
        <div className='order-item-content'>
          <span>商户：{data.title}</span>
          <span>类型：{data.houseType}</span>
          <span>价格：¥{data.price}</span>
        </div>
      </div>
     );
  }
}
 
export default Item;