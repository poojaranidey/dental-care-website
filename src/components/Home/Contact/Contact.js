import React from 'react';
import { Form } from 'react-bootstrap';

const Contact = () => {
    return (
        <div>
            <div>
                <div>
                    <section>
                        <div className="container my-2 py-2">
                            <div className="row">
                                <div className="col-lg-8 offset-lg-2 col-12">
                                    <div className="row">
                                        <div className="col-lg-12 col-12 p-3 contact-us">
                                            <h2 className="text-black fw-bold text-center p-3">CONTACT<span
                                                className="text-style">-US</span>
                                            </h2>

                                        </div>
                                    </div>
                                    <div className="row bg-light pt-3 pb-3 mb-4">
                                        <div className="col-lg-12">
                                            <h6>ADDRESS :</h6>
                                        </div>
                                        <div className="col-lg-4 col-4">
                                            10 no. C,k ghosh road,
                                            sankipara mohor road dewari bazar,Mymensingh.
                                        </div>
                                        <div className="col-lg-4 col-4">
                                            <p className="m-0 text-danger"><i className="fa fa-phone-square" aria-hidden="true"></i>
                                                +8801712345678
                                            </p>
                                            <p className="m-0 text-info"><i className="fa fa-envelope" aria-hidden="true"></i>
                                                example@gmail.com
                                            </p>
                                        </div>
                                        <div className="col-lg-4 col-4 address-icon text-center text-danger">
                                            <i className="fa fa-map-marker" aria-hidden="true"></i>
                                        </div>
                                    </div>
                                    <div className="row bg-light pt-3 pb-3 mb-4">
                                        <div className="col-lg-6 col-12">
                                            <form>
                                                <div className="form-row mb-3">
                                                    <div className="col mb-2">
                                                        <Form.Label>Patient's Name</Form.Label>
                                                        <Form.Control type="name" placeholder="Enter your name" />
                                                    </div>
                                                    <div className="col">
                                                        <Form.Label>Patient's address</Form.Label>
                                                        <Form.Control type="subject" placeholder="Enter your address" />
                                                    </div>
                                                </div>
                                                <div className="form-row mb-3">
                                                    <div className="col mb-2">
                                                        <Form.Label>Patient's Email</Form.Label>
                                                        <Form.Control type="email" placeholder="Enter your email" />
                                                    </div>
                                                    <div className="col">
                                                        <Form.Label>Patient's  mobile number</Form.Label>
                                                        <Form.Control type="mobile" placeholder="Enter your mobile number" />
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
                                                        placeholder="Message :"></textarea>
                                                </div>
                                                <button type="submit" className="p-2 rounded-3 my-4 fw-bold text-black send-btn">Send</button>
                                            </form>
                                        </div>
                                        <div className="col-lg-6 col-12">
                                            <div ><img className="contact-images" src="https://images.unsplash.com/photo-1588776814594-6d444894210e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80" alt="" /></div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Contact;