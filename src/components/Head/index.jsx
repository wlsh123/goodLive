import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import SearchInput from '../SearchInput'
import './style.less'
import '../../static/css/font/iconfont.css'
class Head extends Component {
  render() {
    return (
      <div id='home-header' className='home-header'>
        <div className='home-header-left float-left'>
          <Link to='/city'>
            <span>{this.props.cityName}</span>
            <i className='iconfont icon-didian'></i>
          </Link>
        </div>
        <div className='home-header-right float-right'>
          <Link to='/shopcar'>
            <i className='iconfont icon-gouwuche2'></i>
          </Link>
        </div>
        <div className='home-header-middle'>
          <div className='search-container'>
            <i className='iconfont icon-suosou'></i>
            <SearchInput />
          </div>
        </div>
      </div>
    );
  }
}

export default Head;