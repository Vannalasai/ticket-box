import React from "react";
import { Row , Col , Form , Button , Card} from "react-bootstrap";
import LoginImage from "../assets/login.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { auth } from "../firebase"
import { signInWithEmailAndPassword } from "firebase/auth";

export default function Login({setUser}) {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () => {
        signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
            localStorage.setItem("userEmail", email);
            setUser(email);
            // navigate('/')
        }).catch(err => {
            console.log(err)
        })
        
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
                            <Form action="/submit">
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
                                    <Button className="login-btn" variant="primary" type="submit" onClick={handleSubmit}>Login</Button>
                                    <div style={{textAlign:"center", marginTop:"20px", fontSize:"18px"}}>
                                        New to Movie Corner <br /> Click here to <a onClick={() => navigate("/signup")} style={{ cursor:'pointer'}}>Sign up</a>
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