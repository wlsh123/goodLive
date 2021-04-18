import React, { Component } from 'react';
class LoadMore extends Component {
  constructor(props) {
    super(props);
    this.Container = React.createRef()
  }
  componentDidMount(){
    var WinHeight = document.documentElement.clientHeight;
    // console.log(WinHeight)
    var timer = null  
    window.addEventListener('scroll',()=>{
      // console.log('滚动了')
      let currentEleHeight = this.Container.current.getBoundingClientRect().top;
      // console.log(this.Container)
      //节流和防抖
      if (timer) {
        clearTimeout(timer)
      }
      timer = setTimeout(() => {
        if (currentEleHeight < WinHeight) {
          console.log('该加载数据了')
          this.props.onLoadMore()
        }
      }, 300);
    })
  }
  render() { 
    return ( 
      <div ref={this.Container}></div>
     );
  }
}
 
export default LoadMore;