import React, { Component } from 'react';
import axios from 'axios'
import HomeHotView from '../HomeHotView';
class HomeHot extends Component {
  constructor(props){
    super(props)
    this.state={
      homehot1:[],
      homehot2:[]
    }
  }
  componentDidMount(){
    const instance = axios.create({
      baseURL:'http://localhost:3200/api',
      headers: { 'X-Requested-With': 'XMLHttpRequest' },
    })
    axios.all([instance.get('/homehot1', { params: { city: this.props.cityName } }), instance.get('/homehot2', { params: { city: this.props.cityName } })])
    .then(axios.spread((hot1Res,hot2Res)=>{
      // console.log(hot1Res, hot2Res)
      this.setState({
        homehot1: hot1Res.data,
        homehot2: hot2Res.data
      })
    }))
  }
  render() { 
    const {homehot1, homehot2} = this.state
    // console.log(homehot1.length,homehot2.length);
    return ( 
      <div>
        {
          homehot1.length > 0 ? <HomeHotView data={homehot1} title={"热销单品"} /> : <div>等待数据加载...</div>
        }
        {
          homehot2.length > 0 ? <HomeHotView data={homehot2} title={"家庭常用"} /> : <div>等待数据加载...</div>
        }
      </div>
     );
  }
}
 
export default HomeHot;