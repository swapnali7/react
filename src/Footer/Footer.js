import React, { Component } from 'react';
import { Grid, Row, Col, FormGroup, FormControl, Button } from 'react-bootstrap';
import './Footer.css';


class Footer extends Component {
  render() {
    return (
      <Grid>
      		<Row className="show-grid footer">
      			<Col md={4}>
      				<h4>About Company</h4>
      				<p>NeoSOFT Technologies is here at your quick and easy service for shooping .</p>
      				<p>Contact information</p>
      				<p>Email: contact@neosofttech.com</p>
      				<p>Phone: +91 0000000000</p>
      				<p>MUMBAI, INDIA</p>
      			</Col>
      			<Col md={4}>
      				<h4>About Company</h4>
      				<p>Information</p>
      				<p>Terms & Conditions</p>
      				<p>Guarantee & Return Policy</p>
      				<p>Contact us</p>
      			</Col>
      			<Col md={4}>
      				<h4>Newsletter</h4>
      				<p>Sign up to get exclusive offers from our favorite brands and to be well up in the news.</p>
      				<form>
                <FormGroup bsSize="large">
                  <FormControl type="text" placeholder="Your email" />
                </FormGroup>
                <FormGroup>
                  <Button type="submit">Subscribe</Button>
                </FormGroup>
                </form>
      			</Col>
      		</Row>
      		</Grid>
    );
  }
}

export default Footer;
