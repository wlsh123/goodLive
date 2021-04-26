import React, { Component } from 'react'; 
import CommentStar from '../../../../components/CommentStar';
import './style.less'
class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    const item = this.props.data
    return ( 
      <div>
        <div className='comment-item'>
          <h3>
            <i className='iconfont icon-yonghu'></i>&nbsp;
            {item.username} 
          </h3>
          <CommentStar star={item.start}/>
          <p>{item.comment}</p>
        </div>
      </div>
     );
  }
}
 
export default Item;