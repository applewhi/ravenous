import React from 'react';

class Business extends React.Component{
  render(){
    return(
      <div classname="Business">
        <div classname="image-container">
          <img src={this.props.business.imageSrc} alt=''/>
        </div>
        <h2>{this.props.business.name}</h2>
        <div classname="Business-information">
          <div classname="Business-address">
            <p>{this.props.business.address}</p>
            <p>{this.props.business.city}</p>
            <p>{this.props.business.state +' '+this.props.business.zipCode}</p>
          </div>
          <div classname="Business-reviews">
            <h3>{this.props.business.category}</h3>
            <h3 classname="rating">{this.props.business.rating} stars</h3>
            <p>{this.props.business.reviewCount} reviews</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Business;
