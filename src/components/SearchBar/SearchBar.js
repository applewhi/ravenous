import React from 'react';
import SearchBar from './SearchBar';

let sortByOptions = {
  'Best Match':'best_match',
  'Highest Rated':'rating',
  'Most Reviewed':'review_count'
};

getSortByClass(sortByOption){
  if (this.state.sortBy === sortByOption){
    return 'active';
  } else {
    return '';
  }
}

handlerSortByChange(sortByOption){
  this.setState({sortBy: sortByOption});
}

handleTermChange(event){
  this.setState({term: event.target.value})
}

handleLocationChange(event){
  this.setState({location: event.target.value})
}

handleSearch(event){
  this.props.searchYelp(this.state.term,this.state.location,this.state.sortBy){
  event.preventDefault()
  }
}

class SearchBar extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      term:'',
      location:'',
      sortBy:'best_match'
    };
    
    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }
  
  
  renderSortByOptions(){
    return Object.keys(sortByOptions).map(sortByOptions => {
      sortByOptionValue = sortByOptions[sortByOptions];
      return <li className={this.getSortByClass(sortByOptionValue)}
        onClick=handlerSortByChange.bind(this, sortByOptionValue)
        key="sortByOptionValue">{sortByOptions}</li>
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
        <div classname="SearchBar-fields">{
          <input placeholder="Search Businesses" onChange={this.handleTermChange} />
          <input placeholder="Where?" onChange={this.handleTermChange} />
          <SearchBar searchYelp={this.searchYelp} />
        </div>
        <div classname="SearchBar-submit">
          <a>Lets Go</a>
        </div>
      </div>
      )
   }
}

export default SearchBar;
