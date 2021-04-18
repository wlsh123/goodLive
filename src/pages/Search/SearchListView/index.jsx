import React, { Component } from 'react';
import Item from './Item'
class SearchListView extends Component {
  render() { 
    const data = this.props.data
    return ( 
      <div>
          {
            data.map((e,i)=>{
              return <Item key={i} data={e}/>
            })
          }
      </div>
     );
  }
}
 
export default SearchListView;