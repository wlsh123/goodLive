import React, { Component } from 'react';
import SearchInput from '../../../components/SearchInput';
import './style.less'
class SearchHeader extends Component {
  clickHandler = ()=>{
    window.history.back();
  }
  render() { 
    return ( 
      <div id='search-header' className='clear-fix'>
        <span className='back-icon float-left' onClick={this.clickHandler}>
          <i className='iconfont icon-fanhui'></i>
        </span>
        <div className='input-container'>
          <i className='iconfont icon-suosou'></i>
          <SearchInput keywords={this.props.keywords}/>
        </div>
      </div>
     );
  }
}
 
export default SearchHeader;