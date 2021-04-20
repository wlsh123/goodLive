import React, { Component } from "react";
import HeadComponent from "../../components/HeadComponent";
import DetailInfo from "./DetailInfo";
class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    // console.log(this.props)
    return (
      <div>
        <HeadComponent title={"详情页"} />
        <DetailInfo id={this.props.match.params.id} />
      </div>
    );
  }
}

export default Detail;
