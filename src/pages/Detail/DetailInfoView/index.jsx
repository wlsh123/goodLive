import React, { Component } from "react";
import Tabs from "../../../components/Tabs";
import BuyStore from "../BuyStore";
import Comment from "../Comment";
import "./style.less";
class DetailInfoView extends Component {
  render() {
    const data = this.props.data;
    return (
      <div className="detail-info">
          <Tabs>
            <div tabName='房屋信息'>
              <h3>{data.title}</h3>
              <div className="box">
                <ul>
                  <li>
                    <span>{data.price}/月</span>
                    <p>租金</p>
                  </li>
                  <li>
                    <span>{data.info.type}/月</span>
                    <p>房型</p>
                  </li>
                  <li>
                    <span>{data.houseType}</span>
                    <p>面积</p>
                  </li>
                </ul>
              </div>
              <div className="info">
                <div className="info-list">
                  <p>楼层：{data.info.level}</p>
                  <p>装修：{data.info.style}</p>
                </div>
                <div className="info-list">
                  <p>类型：{data.info.type}</p>
                  <p>朝向：{data.info.orientation}</p>
                </div>
                <div className="info-list">
                  <p>年代：{data.info.years}</p>
                </div>
              </div>
              <BuyStore />
            </div>
            <div tabName='房屋评价'>
            <Comment id={this.props.id} />
            </div>
          </Tabs>
      </div>
    );
  }
}

export default DetailInfoView;
