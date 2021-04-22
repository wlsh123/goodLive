import React, { Component } from 'react';
import './style.less'
class BuyStoreView extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  clickBuyHandler=()=>{

  }
  render() { 
    return ( 
      <div className='buy-store-container clear-flex'>
        <div className='item-container float-left'>
         <button>收藏</button>
        </div>
        <div className='item-container float-right'>
          <button>购买</button>
        </div>
        </div>
     );
  }
}
 
export default BuyStoreView;