import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './style.less'
class Item extends Component {
  render() { 
    const data = this.props.data
    return ( 
      <div className='list-item'>
        <Link to={`/detail/${data.id}`}>
          <img src={data.img} alt="" />
          <div className='mask'>
            <div className='left'>
              <p>{data.title}</p>
              <p>{data.houseType}</p>
            </div>
            <div className='right'>
              <div>{data.rentType}</div>
              {/* dangerouslySetInnerHTML 识别标签 text和html的区别 */}
              <p dangerouslySetInnerHTML={{ __html: data.price + '/月' }}></p>
            </div>
          </div>
        </Link>
      </div>
     );
  }
}
 
export default Item;