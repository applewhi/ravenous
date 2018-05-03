import React from 'react';
import SearchBar from './SearchBar';

let sortByOptions = {
  'Best Match':'best_match',
  'Highest Rated':'rating',
  'Most Reviewed':'review_count'
};

class SearchBar extends React.Component{
  constructor(props){
    super(props);
  }
  renderSortByOptions(){
    return Object.keys(sortByOptions).map(sortByOptions => {
      sortByOptionValue = sortByOptions[sortByOptions];
      return <li key="sortByOptionValue">{sortByOptions}</li>
    });
  }


   render(){
     return (
       <div classname="SearchBar">
        <div classname="SearchBar-sort-options">
          <ul>
            {renderSortByOptions();}
          </ul>
        </div>
        <div classname="SearchBar-fields">
          <input placeholder="Search Businesses" />
          <input placeholder="Where?" />
        </div>
        <div classname="SearchBar-submit">
          <a>Lets Go</a>
        </div>
      </div>
      )
   }
}

export default SearchBar;
