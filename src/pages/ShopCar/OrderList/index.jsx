import React, { Component } from 'react';
import axios from 'axios'
import OrderListView from '../OrderListView';
class OrderList extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      orderData:[]
     }
  }
  componentDidMount(){
    const instance = axios.create({
      baseURL: 'http://localhost:3200/api',
      headers: { 'X-Requested-With': 'XMLHttpRequest' },
    })
    instance.get('/order', {
      params: {
        username:this.props.username
      }
    }).then((response)=>{
      console.log(response.data);
      this.setState({
        orderData:response.data
      })
    })
  }
  render() { 
    return ( 
      <div>
        {
          this.state.orderData.length > 0 ?
            <OrderListView  data={this.state.orderData}/>:
            <div>数据加载中...</div>
        }
      </div>
     );
  }
}
 
export default OrderList;