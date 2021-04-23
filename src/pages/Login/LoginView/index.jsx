import React, { Component } from 'react';
import './style.less'
class LoginView extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      username:''
     }
  }
  changeHandler=(e)=>{
    this.setState({
      username:e.target.value
    })
  }

  clickHandler=()=>{
    this.props.onLogin(this.state.username)
  }
  render() { 
    return ( 
      <div id='login-container'>
        <div className='input-container phone-container'>
          <i className=''></i>
          <input 
            type="text" 
            value={this.state.username}
            placeholder="用户名/手机号" 
            onChange={this.changeHandler}
            />
        </div>
        <div className='input-container password-container'>
          <i className=''></i>
          <button>发送验证码</button>
          <input type="text" placeholder="请输入验证码"/>
        </div>
        <button className='btn-login' onClick={this.clickHandler}>登录</button>
      </div>
     );
  }
}
 
export default LoginView;