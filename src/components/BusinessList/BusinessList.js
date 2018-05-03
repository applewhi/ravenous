import React from 'react';
import BusinessList from './BusinessList';
import Business from '../Business/Business';

class BusinessList extends React.Component{
render(){
    return (
      <div classname="BusinessList">
        {
            this.props.businesses.map(business => {
                return <Business businesss={business} />
            });
        }
      </div>
    )
  }
}

export default BusinessList;
