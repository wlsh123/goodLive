import React, { Component } from 'react';
import SearchHeader from './SearchHeader';
import SearchList from './SearchList';
import {connect} from 'react-redux'
class Search extends Component {
  render() { 
    return ( 
      <div>
        <SearchHeader />
        <SearchList 
          keywords={this.props.match.params.keywords}
          cityName={this.props.city.cityName}
        />
      </div>
     );
  }
}

const mapStateToPropos = state=>{
  return {city:state.city}
}
export default connect(mapStateToPropos)(Search);