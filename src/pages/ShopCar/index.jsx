import React, { Component } from 'react'; 
import { connect } from 'react-redux';
class ShopCar extends Component {
  componentDidMount(){
    if (!this.props.login.username) {
      this.props.history.push('/login')
    }
  }
  render() { 
    return ( 
      <div>
        gouwuche
      </div>
     );
  }
}
 
const mapStateToProps = state=>{
  return { login:state.login }
}
export default connect(mapStateToProps)(ShopCar);