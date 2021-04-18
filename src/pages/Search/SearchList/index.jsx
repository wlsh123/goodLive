import React, { Component } from 'react';
import axios from "axios";
import SearchListView from '../SearchListView';
import LoadMore from '../../../components/LoadMore';
class SearchList extends Component {
  constructor(props){
    super(props);
    this.state={
      searchData:[],
      hasMore:true,
      page:1
    }
  }
  http(keywords, cityName, page){
    const instance = axios.create({
      baseURL: 'http://localhost:3200/api',
      headers: { 'X-Requested-With': 'XMLHttpRequest' },
    })
    instance.get('/search', {
      params: {
        keywords: keywords,
        city: cityName,
        page: page
      }
    })
      .then(response => {
        // console.log(response.data);
        const resData = response.data;
        this.setState({
          searchData: this.state.searchData.concat(resData.data),
          hasMore: resData.hasMore,
          page:this.state.page+1
        })
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  componentDidMount(){
    const keywords = this.props.keywords;
    const cityName = this.props.cityName;
    const page = this.state.page;
    this.http(keywords,cityName,page);
  }

  onLoadMoreHandle = ()=>{
    const keywords = this.props.keywords;
    const cityName = this.props.cityName;
    const page = this.state.page;
    this.http(keywords, cityName, page);
  }
  render() { 
    return ( 
      // console.log(this.state.searchData)
      <div>
        {
          this.state.searchData.length > 0 ?
            <SearchListView data={this.state.searchData}/>:
            <div>等待数据加载...</div>
        }
        {
          this.state.hasMore ?
            <LoadMore onLoadMore={this.onLoadMoreHandle}/>:
            <div>已经到底辣！</div>
        }
      </div>
     );
  }
}
 
export default SearchList;