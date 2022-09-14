import React from 'react';
import {Container, Row, Col, ListGroup, ListGroupItem} from "reactstrap";
import "../../styles/footer.css"

import logo from "../../assets/images/res-logo.png";

import {Link} from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer footer__logo">
      <Container>
        <Row>
          <Col lg="3" md="4" sm="6"> 
                <div className='footer__logo text-start'>
                    <img src={logo} alt="logo"  />
                    <h5>Tasty Treat</h5>
                    <p>Lorem ipsum alskdja kşj şlk şlk şlkşlk şlkşlk şlk ksgdalshjd ljkhlk hl kj hlkh şlkj lkhlkjlkşj ljhljhlkh lkh
                    </p>
                </div>
          </Col>
          <Col lg="3" md="4" sm="6"> 
                <h5 className='footer__title' >Delivery Time </h5>
                <ListGroup className='delivery__time-list'>
                  <ListGroupItem className=' delivery__time-item border-0 ps-0'>
                   <span>
                   Sunday - Thursday
                    </span> 
                    <p>
                      10:00am- 11:00pm
                    </p>
                  </ListGroupItem>
                  <ListGroupItem className='delivery__time-item border-0 ps-0' >
                   <span>
                   Friday - Saturday
                    </span> 
                    <p>
                      10:00am- 01:00am
                    </p>
                  </ListGroupItem>
                </ListGroup>
          </Col>

          <Col lg="3" md="4" sm="6"> 
                <h5 className='footer__title' >Contact</h5>

                <ListGroup className='delivery__time-list'>
                  <ListGroupItem className=' delivery__time-item border-0 ps-0'>
                  <span>
                    Location: Berlin, Germany
                    </span> 
                  </ListGroupItem>
                  
                  <ListGroupItem className=' delivery__time-item border-0 ps-0'>

                   <span>
                    Phone: +64 17836981293
                    </span> 

                  </ListGroupItem>
                  <ListGroupItem className='delivery__time-item border-0 ps-0' >
                   <span>
                    E-mail: berkcinr@gmail.com
                    </span> 

                  </ListGroupItem>S
                </ListGroup>
          </Col>
          <Col lg="3" md="4" sm="6"> 
              <h5 className='footer__title' >Newsletter</h5>
              <p> Subscribe out newsletter</p>
              <div className="newsletter">
                <input type="email" placeholder='Enter your mail' />
                <span> <i class="ri-send-plane-line"></i> </span>
              </div>
          </Col>
          <Col lg="3" md="4" sm="6"> </Col>
        </Row>

        <Row className='mt-5'>
          <Col lg="6" md="6">
              <div className='copyright__text'>
                Copyrights 2023, website made by Berk Çinar. All Rights Reserved.
              </div>
          </Col>
          <Col lg="6" md="6">
            <div className="social__links d-flex align-items-center gap-4 justify-content-end">
              <p className='m-0'>Follow:</p>
              <span>
                <Link to="https://www.linkedin.com/in/berkcinr/">
                <i class="ri-linkedin-box-fill"></i>
                </Link>
              </span>
              <span>
                <Link to="https://github.com/berk-cinar/">
                <i class="ri-github-fill"></i>
                </Link>
              </span>
              <span>
                <Link to="https://instagram.com/coreofnature/">
                <i class="ri-instagram-line"></i>
                </Link>
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer