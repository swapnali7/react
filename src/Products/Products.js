import React, { Component } from 'react';
import SingleProduct from './SingleProduct.js'
import { Grid, Row, Col } from 'react-bootstrap';

class Products extends Component {
	
  render() {
  	var productList = [
  		{
  			name:"Robert Recliner Sofa Set",
  			price:1400,
  			rating:3,
        image:"http://180.149.241.208:3000/storage/thumbnail/_15b-lightgold-oak-birch-batula-vintage-light-gold-3-2-mahogany-original-imaeenhryfgb6ns4_250thumb.jpeg"
  		},
  		{
  			name:"Ursula Lounge Chair",
  			price:3400,
  			rating:4,
        image:"http://180.149.241.208:3000/storage/thumbnail/_Ursula_Lounge_chair_BL_00_250thumb.jpg"
  		},
  		{
  			name:"Bradbury Desk",
  			price:2600,
  			rating:3,
        image:"http://180.149.241.208:3000/storage/thumbnail/_Bradbury_Desk_Mahogany_Finish_250thumb.jpg"
  		},
  		{
  			name:"Robinson",
  			price:3000,
  			rating:4,
        image:"http://180.149.241.208:3000/storage/thumbnail/_820170629075720img_250thumb.jpg"
  		},
  		{
  			name:"Winchester Fabric Sofa",
  			price:3200,
  			rating:4,
        image:"http://180.149.241.208:3000/storage/thumbnail/_FNSF51WCCO3_-_main_2_250thumb.jpg"
  		},
  		{
  			name:"Fonteyn Study Table",
  			price:2500,
  			rating:3,
        image:"http://180.149.241.208:3000/storage/thumbnail/_fonteyn_01_55_250thumb.jpg"
  		}
  	]; 
  	var productsGrid = productList.map((product) => 
  		<SingleProduct key={product.name.toString()} product={product}></SingleProduct>
  	);
    return (
      <div>
      	<Grid>
      		<Row className="show-grid productGrid">
            <Col xs={12}>
              <h4>Popular Products</h4>
            </Col>
      			{productsGrid}
      		</Row>
      	</Grid>
      </div>
    );
  }
}

export default Products;
