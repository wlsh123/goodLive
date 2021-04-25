import React, { Component } from 'react';
import Item from './Item';
class OrderListView extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() {
    const data = this.props.data
    return ( 
      <div>
        {
          data.map((element, index)=>{
            return <Item key={index} data={element}/>
          })
        }
      </div>
     );
  }
}
 
export default OrderListView;