import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
import './style.less'
class SearchInput extends Component {
  constructor(props){
    super(props)
    this.state={
      searchValue:''
    }
  }
  inputChangeHandler = e=>{
    this.setState({
      searchValue:e.target.value
    })
  }

  keyUpHandler = (e)=>{
    if (e.keyCode == 13) {
      this.props.history.push('/search/'+this.state.searchValue)
    }
  }
  render() { 
    return ( 
      <input 
        type="text"
        className='search-input'
        value={this.state.searchValue}
        placeholder='请输入搜索内容'
        onChange={this.inputChangeHandler}
        onKeyUp={this.keyUpHandler}
        />
     );
  }
}
 
export default withRouter(SearchInput);