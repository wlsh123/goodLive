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
      page:1,
      isLoading:false
    }
  }
  http(keywords, cityName, page){
    this.setState({isLoading:true})
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
          page:this.state.page+1,
          isLoading:false
        })
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  componentDidMount(){
    if (!this.state.isLoading) {
      const keywords = this.props.keywords;
      const cityName = this.props.cityName;
      const page = this.state.page;
      this.http(keywords, cityName, page);
    }
  }
  async componentDidUpdate(preProps,preState){
    if (preProps.keywords !== this.props.keywords) {
      const keywords = this.props.keywords;
      const cityName = this.props.cityName;
      await this.setStateAsync({
        page:1,
        searchData:[]
      });
      this.http(keywords, cityName, this.state.page)
    }
  }
  setStateAsync(state){
    return new Promise((resolve)=>{
      this.setState(state,resolve)
      // console.log(resolve)
    })
  }
  onLoadMoreHandle = ()=>{
    const keywords = this.props.keywords;
    const cityName = this.props.cityName;
    const page = this.state.page;
    this.http(keywords, cityName, page);
    // console.log(keywords,cityName,page);
  }
  render() { 
    return ( 
      // console.log(this.state.searchData)
      <div>
        {
          this.state.searchData.length > 0 ?
            <SearchListView data={this.state.searchData}/>:
            <div>??????????????????...</div>
        }
        {
          this.state.hasMore ?
            <LoadMore onLoadMore={this.onLoadMoreHandle}/>:
            <div>??????????????????</div>
        }
      </div>
     );
  }
}
 
export default SearchList;