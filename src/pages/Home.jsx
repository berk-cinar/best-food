import React, {useState, useEffect} from 'react'
import Helmet from "../components/Helmet/Helmet"
import { Container, Row, Col, ListGroupItem, ListGroup } from 'reactstrap';
import heroImg from "../assets/images/hero.png"
import "../styles/hero-section.css";

import { Link } from "react-router-dom";

import Category from '../components/UI/category/Category';
import "../styles/home.css"

import featureImg01 from "../assets/images/service-01.png"
import featureImg02 from "../assets/images/service-02.png"
import featureImg03 from "../assets/images/service-03.png"

import products from "../assets/fake-data/products";

import foodCategoryImg01 from "../assets/images/hamburger.png";
import foodCategoryImg02 from "../assets/images/pizza.png";
import foodCategoryImg03 from "../assets/images/bread.png";

import ProductCard from '../components/UI/product-card/ProductCard';

import whyImg from "../assets/images/location.png";

import networkImg from "../assets/images/network.png"

import TestimonialSlider from '../components/UI/slider/TestimonialSlider';

const featureData = [
  {
    title: "Quick Delivery",
    imgUrl: featureImg01,
    desc: "Lorem ipsum dolori sit amet cosndf sdflksj sşldjfs, imus  asl."
  },
  {
    title: "Super Dine In",
    imgUrl: featureImg02,
    desc: "Lorem ipsum dolori sit amet cosndf sdflksj sşldjfs, imus  asl."
  },
  {
    title: "Easy Pick Up",
    imgUrl: featureImg03,
    desc: "Lorem ipsum dolori sit amet cosndf sdflksj sşldjfs, imus  asl."
  }
  
]

const Home = () => {

  const[category, setCategory] = useState("ALL");
  const [allProducts, setAllProducts]= useState(products);

  const [hotPizza, setHotPizza] = useState([])

  useEffect(()=> { 
    const filteredPizza = products.filter(i => i.category === "Pizza")
    const slicePizza = filteredPizza.slice(0,4)
    setHotPizza(slicePizza)
   },[])

  useEffect(() => {

    if(category=== "ALL"){
      setAllProducts(products)
    }
    
    if(category==="BURGER") {
      const filteredProducts = products.filter(item=> item.category === "Burger")

      setAllProducts(filteredProducts)
    }
    if(category==="PIZZA") {
      const filteredProducts = products.filter(item=> item.category === "Pizza")

      setAllProducts(filteredProducts)
    }
    if(category==="BREAD") {
      const filteredProducts = products.filter(item=> item.category === "Bread")

      setAllProducts(filteredProducts)
    }


  },[category])

  return (
<>
        <section>
          <Container>
            <Row>
              <Col lg="6" md="6">
               <div className='hero__content'>
                   <h5 className='mb-3'> 
                      Easy way to make an order
                   </h5>
                  <h1 className='hero__title mb-4'>
                    <span>HUNGRY ?</span> Just wait <br /> food at <span> your door </span>
                  </h1>
                  <p>
                    lorem ipsu bla bla bla bla bla bla bla
                  </p>
                  <div className="hero__btns d-flex align-items-center gap-5 mt-4">
                    <button className='order__btn d-flex align-items-center justify-content-between'>
                      Order now <i class="ri-arrow-right-s-line"></i>
                    </button>
                    <button className='all__foods-btn'>
                      <Link to="/foods">
                        See all foods
                      </Link>
                    </button>
                  </div>
                  <div className='hero__service d-flex align-items-center gap-5 mt-5'>
                    <p className='d-flex align-items-center gap-2'>
                       <span className='shipping__icon'> 
                          <i class="ri-car-line"></i>
                        </span> 
                            No shipping charge 
                    </p>
                    <p className="d-flex align-items-center gap-2" > 
                      <span className='shipping__icon'>
                        <i class="ri-shield-check-line"></i> 
                      </span>
                          100% secure checkout 
                    </p>
                  </div>
                </div>
                </Col>
                <Col lg="6" md="6">
                  <div className="hero__img">
                    <img src={heroImg} alt="hero-img" className='w-100' />
                  </div>
                </Col>
            </Row>
          </Container>
        </section>
        <section pt-0>
          <Category/>
        </section>

        <section>
          <Container>
            <Row>
              <Col lg="12" className='text-center'>
                <h5 className='feature__subtitle mb-4'>What we serve</h5>
                <h2 className='feature__title'>Just sit back at home</h2>
                <h2 className='feature__title' >We will <span> take care </span></h2>
                <p className='mb-1 mt-4 feature__text'> 
                Lorem, ipsum dolor sit amet consectur adisicing elit, Dolor, officisss
                </p>
                <p className='feature__text'>
                  Lorem, ipsum dolor sit amet consectur adisicing elit, Dolor, officiss
                  </p>
              </Col>

              {featureData.map((item,index) =>
                    <Col lg="4" md="4" sm="6" key={index} className="mt-5">
                        <div className="feature__item">
                            <img src={item.imgUrl} alt="feature-img" className='feature__img' />
                            <h5>{item.title}</h5>
                            <p>{item.desc}</p>
                        </div>
                      </Col>
              )}
              <Col lg="4" md="4">
              </Col>
              <Col lg="4" md="4">
              </Col>
            </Row>
          </Container>
        </section>  
        <section>
          <Container>
            <Row>
              <Col lg="12" className='text-center'>
                <h2>Popular Foods</h2>
              </Col>
              <Col lg="12">
                  <div className="food__category d-flex align-items-center justify-content-center gap-2">
                      <button className='all_btn foodBtnActive' onClick={()=> {setCategory("ALL")}} >
                        All
                        </button>
                      <button className='d-flex align-items-center' onClick={()=> {setCategory("BURGER")}} >
                        <img src={foodCategoryImg01} alt="" /> 
                        Burger
                        </button>    
                      <button className='d-flex align-items-center ' onClick={()=> {setCategory("PIZZA")}} >
                        <img src={foodCategoryImg02} alt="" /> 
                        Pizza 
                        </button>    
                      <button className='d-flex align-items-center' onClick={()=> {setCategory("BREAD")}} >
                        <img src={foodCategoryImg03} alt="" />
                         Bread 
                         </button>    
                  </div>
              </Col>
              {allProducts.map(item => (
                  <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mt-5">
                    <ProductCard item={item}/>
                  </Col>
                ))
              }
            </Row>
          </Container>
        </section>









































        <section className='why__choose-us'>
            <Container>
              <Row>
                <Col lg="6" md="6">
                  <img src={whyImg} alt="why-tasty-treat" className='why__best-food' />
                </Col>

                <Col lg="6" md="6">
                  <div className="why__tasty-treat">
                    <h2 className='tasty__treat-title mb-4'>
                      Why  <span> BEST Food ? </span> 
                    </h2>
                    <p className='best__food-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                       incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                       exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                    <ListGroup className='mt-5'>
                      <ListGroupItem className='border-0 ps-0' >
                        <p className='choose__us-title d-flex align-items-center gap-2'>
                           <i class="ri-checkbox-circle-line"></i>
                        Fresh and Tast Foods </p>
                        <p className='choose__us-desc'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                         </p>
                        
                      </ListGroupItem>
                  
                      <ListGroupItem className='border-0 ps-0'>
                        <p className='choose__us-title d-flex align-items-center gap-2'> <i class="ri-checkbox-circle-line"></i>
                        Quality Support foods </p>
                        
                        <p className='choose__us-desc'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        </p>
                    
                      </ListGroupItem>
               
                      <ListGroupItem className='border-0 ps-0'>
                    <p className='choose__us-title d-flex align-items-center gap-2'><i class="ri-checkbox-circle-line"></i>
                        Fresh and Tast Foods</p>
                        
                        <p className='choose__us-desc'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        </p>
                      </ListGroupItem>
                
                    </ListGroup>
                  </div>
                </Col>
              </Row>
            </Container>
        </section>
        <section className='pt-0'>
          <Container>
            <Row>
              <Col lg="12" className='text-center mb-5'>
                <h2>Hot Pizza</h2>
              </Col>

              {
                hotPizza.map(item=> (
                  <Col lg="3" md="4" key={item.id}>
                      <ProductCard item={item} />
                  </Col>
                ))
              }
            </Row>
          </Container>
        </section>
        







        <section>
          <Container>
            <Row>
              <Col lg="6" md="6">
                <div className='testimonial '>
                  <h5 className='testimonial__subtitle mb-4' >
                     Testimonial
                  </h5>
                  <h2 className='testimonial__title mb-4'>
                    What our <span> costumers </span> are saying ? 
                  </h2>
                  <p className='testimonial__desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                     quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                      <TestimonialSlider/>
                </div>
              </Col>
              <Col lg="6" md="6">
                <img src={networkImg} alt="testimonial-img" className='w-100' />
              </Col>
            </Row>
          </Container>
        </section>

  </>
  )
}

export default Home;