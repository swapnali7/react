import React, { Component } from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import StarRatingComponent from 'react-star-rating-component';

class SingleProduct extends Component {
  render() {
    return (
      		<Col xs={12} md={4}>
            <div className="thumbnail">
              <Image src={this.props.product.image} responsive />
        			<h3>{this.props.product.name}</h3>
        			<p><i className="fa fa-inr"></i>{this.props.product.price}</p>
              <StarRatingComponent 
                name="rate2" 
                editing={false}
                renderStarIcon={() => <span><i class="fa fa-star" aria-hidden="true"></i></span>}
                starCount={5}
                value={this.props.product.rating}
              />
      			</div>
      		</Col>
    );
  }
}

export default SingleProduct;
