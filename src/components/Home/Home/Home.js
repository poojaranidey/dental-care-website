
import React from 'react';
import { Carousel, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Services from '../Services/Services';
import "./Home.css";
const Home = () => {
    return (
        <>
            <div>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3 className="heading">Complete Oral Health Starts from here and now</h3>
                            <p className="tag-p">Has an exceptional organizational and leadership skills.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://images.unsplash.com/photo-1609840113929-b130355987e1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>The Modern Dentistry you are missing</h3>
                            <p className="tag-p">Responsible for the beautiful pearly white smiles.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://images.unsplash.com/photo-1580821810660-5486b8e980a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>We offer full scale services you need</h3>
                            <p className="tag-p">Works with dentist to meet the oral health needs of patients.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>

            <div className="text-center mt-5" id="clinic">
                <h1 classname="h1-tag">Welcome!</h1>
                <p className="p-tag">New Smile</p>
            </div>
            <div className="half-width d-flex p-5 mx-5">
                <div>
                    <img className="slide-images " src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=868&q=80" alt="" />
                </div>
                <div className="welcome-details m-3 p-5">
                    <h1>We use advanced proven technology to keep your smile looking the best!</h1>
                    <p>We are passionate about smiles and having the latest technology is one step we can take to help save yours!</p>

                    <Link to="/contact"><Button classname="btn btn-primary">Make An Appointment</Button></Link>
                </div>
            </div>
            <div>
                <Services></Services>
            </div>
            <div class="container pb-5">
                <div className="py-5">     <h1>
                    What We Do
                </h1>
                    <h1>
                        People Why Choose Our Service

                    </h1></div>
                <div class="row">
                    <div class="col-4"><div>

                        <div className=" about-section w-100">
                            <div className="p-5 m-5  ">
                                <Card border="primary" style={{ width: '18rem' }}>
                                    <Card.Header>We give You suitable dental treatments</Card.Header>
                                    <Card.Body>
                                        <Card.Title>  Cosmetic Dentistry</Card.Title>
                                        <Card.Text>

                                            Cosmetic Dentistry refers to the most suitable dental treatments that based on patient’s current teeth or gums condition, concerns, desired outcomes and budget.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                                <br />

                                <Card border="secondary" style={{ width: '18rem' }}>
                                    <Card.Header>To to make the best of your teeth</Card.Header>
                                    <Card.Body>
                                        <Card.Title>Quality braces</Card.Title>
                                        <Card.Text>
                                            The purpose of using braces is to make the best of your teeth. This includes allowing you to bite correctly, eat more comfortably
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                                <br />

                                <Card border="success" style={{ width: '18rem' }}>
                                    <Card.Header>
                                        There’s A Lot You Can Do To Prevent Tooth Loss</Card.Header>
                                    <Card.Body>
                                        <Card.Title>  General dentistry </Card.Title>
                                        <Card.Text>
                                            General dentistry covers a wide range of procedures. The goal of general dentistry is to remove all disease from your mouth
                                        </Card.Text>
                                    </Card.Body>
                                </Card>


                            </div>




                        </div>

                    </div></div>
                    <div className="col-6 ">
                        <div className="about-image">
                            <img src="https://webtend.net/demo/html/wellco/assets/images/why_us.png" alt="" />
                        </div>
                    </div>
                </div>
                <Link to="/about">  <Button variant="outline-primary">Read more...</Button></Link>
            </div>

        </>
    );
};

export default Home;