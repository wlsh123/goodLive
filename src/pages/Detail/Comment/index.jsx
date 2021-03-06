import React, { Component } from 'react';
import axios from 'axios'
import CommentView from '../CommentView';
import LoadMore from '../../../components/LoadMore'
class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      commentData: [],
      hasMore: false
     }
  }
  http() {
    const instance = axios.create({
      baseURL: 'http://localhost:3200/api',
      headers: { 'X-Requested-With': 'XMLHttpRequest' },
    })
    instance
      .get("/comment", { params: { id: this.props.id } })
      .then((response) => {
        // console.log(response.data);
        this.setState({
          commentData: this.state.commentData.concat(response.data.data),
          hasMore: response.data.hasMore
        })
      })
  }  
  componentDidMount() {
   this.http()
  }
  loadMoreHandle=()=>{
    this.http()
  }
  render() { 
    return ( 
      <div>
        {
          this.state.commentData.length > 0 ?
          <CommentView  data={this.state.commentData} />:
          <div>等待数据加载</div>
        }
        {
          this.state.hasMore ? 
            <LoadMore onLoadMore={this.loadMoreHandle}/>:
            <div>没有新评论辣！</div>
        }
      </div>
     );
  }
}
 
export default Comment;