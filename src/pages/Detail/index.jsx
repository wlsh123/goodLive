import React, { Component } from 'react';
import DetailHeader from './DetailHeader';
import DetailInfo from './DetailInfo';
class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    // console.log(this.props)
    return ( 
      <div>
        <DetailHeader title={this.props.match.params.title}/>
        <DetailInfo id={this.props.match.params.id} />
        xiangqing:{this.props.match.params.id}
      </div>
     );
  }
}
 
export default Detail;