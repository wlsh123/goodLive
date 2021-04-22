import React, { Component } from 'react';
import BuyStoreView from '../BuyStoreView';
class BuyStore extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div>
        <BuyStoreView />
      </div>
     );
  }
}
 
export default BuyStore;