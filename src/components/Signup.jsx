import React, { useEffect, useState } from "react";
import { Row , Col , Form , Button , Card} from "react-bootstrap";
import LoginImage from "../assets/login.png";
import { useNavigate } from "react-router-dom";

export default function Signup({setUser}) {

    const navigate = useNavigate('');
    const [email, setEmail] = useState('');

    const handleSubmit = () => {
        localStorage.setItem("userEmail", email);
        setUser(email);
        navigate('/')
    }

    return(
        <div className="login-box">
            <Row>
                <Col className="login-inner-box">
                    <img height={550} src={LoginImage} alt="" />
                    <h1 className="caption-1">BOOK TICKETS | EARN POINTS</h1>
                </Col>
                <Col className="login-inner-box">
                    <Card style={{width:"30rem", padding:"25px", borderRadius:"22px"}}>
                        <Card.Body>
                            <Form>
                                <div>
                                    <Form.Group className="mt-3 mb-3" controlId="formBasicEmail">
                                        <Form.Label>Email Address</Form.Label>
                                        <Form.Control  type="email" placeholder="Email Address"
                                        onChange={(e) => setEmail(e.target.value)} value={email} required/>
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password" required/>
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Confirm Password</Form.Label>
                                        <Form.Control type="password" placeholder="Confirm Password" required/>
                                    </Form.Group>

                                    <Button className="login-btn" variant="primary" type="submit" onClick={handleSubmit}>Sign up</Button>
                                    <div style={{textAlign:"center", marginTop:"20px", fontSize:"18px"}}>
                                        Already have an account ? <br /> Please Click here <a onClick={() => navigate("/login")} style={{ cursor:'pointer'}}>Login</a>
                                    </div>
                                </div>
                            </Form>
                        </Card.Body>
                    </Card>
                    
                </Col>
            </Row>
        </div>
    )
}