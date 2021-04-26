import React, { Component } from 'react';
import axios from 'axios'
import './style.less'
class Item extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      commentState:0
     }
    this.feelBackText = React.createRef()
  }
  componentDidMount=()=>{
    this.setState({
      commentState:this.props.data.commentState
    })
  }
  clickHandle=()=>{
    const {commentState} = this.state
    this.setState({commentState:1})
  }
  SubmitHandle=()=>{
   if (this.feelBackText.current.value) {
     const instance = axios.create({
       baseURL: 'http://localhost:3200/api',
       headers: { 'X-Requested-With': 'XMLHttpRequest' },
     })
     instance.post('/getcomment', { content: this.feelBackText.current.value }).then((response) => {
       console.log(response.data);
       if (response.data.msg) {
         this.setState({
           commentState: 2
         })
       }
     })
   }else{
     alert('请填写评价信息')
   }
  }
  CancelHandle=()=>{
    this.setState({ commentState: 0 })
  }
  render() { 
    const data = this.props.data;
    const {commentState} = this.state
    return ( 
      <div className='clear-fix order-item-container'>
        <div className="order-item-img float-left">
          <img src={data.img} alt=""/>
        </div>
        <div className='order-item-comment float-right'>
          {
            commentState === 0 ?
              <button className='btn' onClick={this.clickHandle}>评价</button>:
              commentState === 1 ? '' :
              <button className='unselected-btn btn'>已评价</button>
          }
        </div>
        <div className='order-item-content'>
          <span>商户：{data.title}</span>
          <span>类型：{data.houseType}</span>
          <span>价格：¥{data.price}</span>
        </div>
        {
          commentState === 1 ?
            <div className='comment-text-container'>
              <textarea className='comment-text' style={{ width: '100%', height: '80px' }} ref={this.feelBackText}></textarea>
              <button className='btn' onClick={this.SubmitHandle} >提交</button>
              <button className='btn unselected-btn' onClick={this.CancelHandle}>取消</button>
            </div>:''
        }
      </div>
     );
  }
}
 
export default Item;