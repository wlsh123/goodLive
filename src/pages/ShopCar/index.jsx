import React, { Component } from 'react'; 
import { connect } from 'react-redux';
import ShopCarInfo from './ShopCarInfo';
import CarHead from '../../components/HeadComponent'
import OrderList from './OrderList';
class ShopCar extends Component {
  componentDidMount(){
    if (!this.props.login.username) {
      this.props.history.push('/login')
    }
  }
  render() { 
    return ( 
      <div>
        <CarHead title='购物车' />
        <ShopCarInfo 
          username={this.props.login.username}
          city={this.props.city.cityName}
        />
        <OrderList />
      </div>
     );
  }
}
 
const mapStateToProps = state=>{
  return { 
    login:state.login,
    city:state.city
  }
}
export default connect(mapStateToProps)(ShopCar);