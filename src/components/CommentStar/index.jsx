import React, { Component } from 'react';
import './style.less'
class CommentStar extends Component {
  render() { 
    let star = this.props.star;
    if (star >= 5) {
      star = 5;
    }
    return ( 
      <div className='star-container'>
        {
          [1,2,3,4,5].map((item, index)=>{
            let lightClass = star >=item ? 'light': ''
            return <i key={index} className={'iconfont icon-shouye' + lightClass}></i>
          })
        }
      </div>
     );
  }
}
 
export default CommentStar;