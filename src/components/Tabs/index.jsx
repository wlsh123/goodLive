import React, { Component } from 'react'; 
import './style.less'
class Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      currentIndex:0
     }
  }

  check_title_index=(index)=>{
    return this.state.currentIndex === index ? 'Tab_title active' : 'Tab_title'
  }

  clickTabHandle=(index)=>{
    this.setState({
      currentIndex : index
    })
  }

  check_item_index=(index)=>{
    return this.state.currentIndex === index ? 'show':'hide'
  }
  render() { 
    // console.log(this.props);
    return ( 
      <div>
        <ul className='Tab_title_wrap'>
          {
            //这个方法是React提供的，专门读取this.props.children的
            React.Children.map(this.props.children, (element, index)=>{
              // console.log(element);
              return (
                <li 
                  className={this.check_title_index(index)} 
                  onClick={()=>{this.clickTabHandle(index)}}
                  >
                  {element.props.tabName}
                </li>
              )
            })
          }
        </ul>
        <div>
          {
            React.Children.map(this.props.children, (element, index)=>{
              return (
                <div className={this.check_item_index(index)}>
                  {element.props.children}
                </div>
              )
            })
          }
        </div>
      </div>
     );
  }
}
 
export default Tabs;