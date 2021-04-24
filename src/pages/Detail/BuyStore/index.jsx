import React, { Component } from 'react';
import { connect } from 'react-redux';
import BuyStoreView from '../BuyStoreView';
import {withRouter} from 'react-router-dom'
import {collect,unCollect} from '../../../actions/collect'
class BuyStore extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      isCollect:false
     }
  }

  componentDidMount(){
    this.setState({
      isCollect:this.isStore()
    })
  }
  storeHandle=()=>{
    const username = this.props.login.username;
    if (username) {
      // console.log(this.isStore())
      if (this.isStore()) {
        //取消收藏
        this.props.unCollect({id:this.props.id})
        this.setState({isCollect:false})
      }else{
        //收藏
        this.props.collect({id: this.props.id});
        this.setState({isCollect:true})
      }
    }else{
      this.props.history.push('/login')
    }
  }
  //判断是否收藏
  isStore(){
    const currentID = this.props.id;
    const collected = this.props.collected;
    return collected.some((element)=>{
      return element.id == currentID
    })
  }
  render() { 
    return ( 
      <div>
        <BuyStoreView onStore={this.storeHandle} isCollect={this.state.isCollect}/>
      </div>
     );
  }
}
 
const mapStateToProps = state=>{
  return {
    login:state.login,
    collected: state.collect
  }
}
export default withRouter(connect(mapStateToProps, { collect, unCollect})(BuyStore));