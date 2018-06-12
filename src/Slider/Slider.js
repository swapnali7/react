import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Grid, Row, Col } from 'react-bootstrap';

class Slider extends Component {
  render() {
    return ( 
    	<Grid>
      		<Row className="show-grid">
      			<Col xs={12}>     
			      	<Carousel autoPlay>
					    <div>
					      <img src="http://180.149.241.208:3000/storage/image/tables.jpg" />
					      <p className="legend">Legend 1</p>
					    </div>
					    <div>
					      <img src="http://180.149.241.208:3000/storage/image/beds.jpg" />
					      <p className="legend">Legend 1</p>
					    </div>
					</Carousel>
				</Col>
			</Row>
		</Grid>
    );
  }
}

export default Slider;
