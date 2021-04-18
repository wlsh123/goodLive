import React, { Component } from 'react';
import axios from "axios";
import SearchListView from '../SearchListView';
class SearchList extends Component {
  constructor(props){
    super(props);
    this.state={
      searchData:[],
      hasMore:false
    }
  }
  componentDidMount(){
    const instance = axios.create({
      baseURL: 'http://localhost:3200/api',
      headers: { 'X-Requested-With': 'XMLHttpRequest' },
    })
    instance.get('/search', {
      params: {
        keywords:this.props.keywords,
        city: this.props.cityName,
        page:1
      }
    })
      .then(response => {
        // console.log(response.data);
        const resData = response.data;
        this.setState({
          searchData: resData.data,
          hasMore: resData.hasMore
        })
      })
      .catch(function (error) {
        console.log(error);
      });

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
      </div>
     );
  }
}
 
export default SearchList;