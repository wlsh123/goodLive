import React, { Component } from 'react';
import { connect } from 'react-redux';
import BuyStoreView from '../BuyStoreView';
import {withRouter} from 'react-router-dom'
class BuyStore extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  storeHandle=()=>{
    const username = this.props.login.username;
    if (username) {
      console.log('收藏成功');
    }else{
      this.props.history.push('/login')
    }
  }
  render() { 
    return ( 
      <div>
        <BuyStoreView onStore={this.storeHandle}/>
      </div>
     );
  }
}
 
const mapStateToProps = state=>{
  return {login:state.login}
}
export default withRouter(connect(mapStateToProps)(BuyStore));