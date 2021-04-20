import React, { Component } from "react";
import axios from "axios";
import DetailInfoView from "../DetailInfoView";
import Swiper from "../../../components/Swiper";

class DetailInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detailData: {},
    };
  }
  componentDidMount() {
    const instance = axios.create({
      baseURL: "http://localhost:3200/api",
      headers: { "X-Requested-With": "XMLHttpRequest" },
    });
    instance
      .get("/detail", { params: { id: this.props.id } })
      .then((response) => {
        // console.log(response);
        this.setState({
          detailData: response.data,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  render() {
    return (
      <div>
        {this.state.detailData.imgs ? (
          <Swiper banners={this.state.detailData.imgs} />
        ) : (
          <div>图片走丢啦！</div>
        )}
        {this.state.detailData.imgs ? (
          <DetailInfoView id={this.props.id} data={this.state.detailData} />
        ) : (
          <div>等待数据加载</div>
        )}
      </div>
    );
  }
}

export default DetailInfo;
