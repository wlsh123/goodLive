import React, { Component } from 'react';
import SearchHeader from './SearchHeader';
class Search extends Component {
  render() { 
    return ( 
      <div>
        <SearchHeader />
        search:{this.props.match.params.keywords}
      </div>
     );
  }
}
 
export default Search;