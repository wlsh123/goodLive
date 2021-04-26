import React, { Component } from 'react';
import './style.less'
class ShopCarInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div className='userinfo-container'>
        <p>
          <i className='iconfont icon-zhanghao_huabanfuben'></i>&nbsp;&nbsp;
          <span>{this.props.username}</span>
        </p>
        <p>
          <i className='iconfont icon-chengshi'></i>&nbsp;&nbsp;
          <span>{this.props.city}</span>
        </p>
      </div>
     );
  }
}
 
export default ShopCarInfo;