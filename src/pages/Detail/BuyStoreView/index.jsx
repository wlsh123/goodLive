import React, { Component } from 'react';
import './style.less'
class BuyStoreView extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  clickStoreHandle=()=>{
    this.props.onStore();
  }
  render() { 
    return ( 
      <div className='buy-store-container clear-flex'>
        <div className='item-container float-left'>
          {
            this.props.isCollect ? 
              <button className='selected' onClick={this.clickStoreHandle}>已收藏</button>
              :
              <button className='selected o' onClick={this.clickStoreHandle}>收藏</button>
          }
        </div>
        <div className='item-container float-right'>
          <button>购买</button>
        </div>
        </div>
     );
  }
}
 
export default BuyStoreView;