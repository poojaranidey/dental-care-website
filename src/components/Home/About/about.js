import React from 'react';
import { Accordion, Form } from 'react-bootstrap';
import "./About.css"

const About = () => {
    return (
        // about section......
        <div className="mb-5 pb-2">

            <section className="container mt-2 pb-5">
                <h1 className="fw-bold text-center pb-5 mt-2">People Why Choose Our Clinic
                </h1>
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <img src="https://images.unsplash.com/photo-1559000357-f6b52ddfbe37?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80" className="w-100 p-5" alt=""></img>
                    </div>
                    <div className="col-lg-6">
                        <Accordion>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Responsible for the beautiful pearly white smiles.</Accordion.Header>
                                <Accordion.Body>
                                    Our goal is to provide our patients with the best possible dental care in an environment of comfort and compassion.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>
                                    Works with dentist to meet the oral health needs of patients.</Accordion.Header>
                                <Accordion.Body>
                                    Our wisdom teeth are the third and final set of molars, located at the upper and lower back of our mouth. If you are experiencing pain from
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>
                                    Maintains and improves people’s oral health and quality of life.</Accordion.Header>
                                <Accordion.Body>
                                    There are many reasons why you might lose a tooth: from poor dental care, to illness, lifestyle choices, or injury to your teeth.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>You Need to Know About Wisdom Teeth </Accordion.Header>
                                <Accordion.Body>
                                    Has an exceptional organizational and leadership skills. pearly white smiles.
                                    Works with dentist to meet the oral health needs of patients.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>

                    </div>
                </div>
            </section>
            <div>

                <h1>Book your name and get discount upto 20%..</h1>
                <div
                    className="container education-bg-info pb-2  rounded-3" id="subscribe">


                    <p>Get updates on sales, specials and more
                    </p>
                    <Form.Label>Patient's Name</Form.Label>
                    <Form.Control type="name" placeholder="Enter your name" />
                    <br />
                    <Form.Label>Patient's  Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <br />
                    <Form.Label>Patient's Subject</Form.Label>
                    <Form.Control type="subject" placeholder="Enter your subject" />
                    <br />

                    <button className="Submit-now">SUBMIT</button>

                </div>
            </div>
        </div>
    );
};

export default About;