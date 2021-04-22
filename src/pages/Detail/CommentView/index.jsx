import React, { Component } from 'react';
import Item from './Item';
import './style.less'
class CommentView extends Component {
  
  render() { 
    const data = this.props.data;
    return ( 
      <div className='comment-list'>
        {
          data.map((element,index)=>{
            return <Item key={index} data={element}/>
          })
        }
      </div>
     );
  }
}
 
export default CommentView;