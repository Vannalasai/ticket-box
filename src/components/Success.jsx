import React from "react";
import { Row, Col } from "react-bootstrap";
import PopcornImg from '../assets/popcorn.png';
import QrImg from '../assets/qr.png'

export default function Success(){
    return(
        <div>
            <Row>
                <Col>
                    <div style={{padding: 50, marginTop:70, display:'flex', justifyContent:'center', alignItems:'center'}}>
                        <img src={PopcornImg} height={250} />

                        <div>
                            <h5>Tickets confirmed</h5>
                            <h5>Enjoy your movie</h5>
                        </div>
                    </div>
                    
                </Col>
                <Col>
                    <div style={{padding: 50, marginTop:70, display:'flex', justifyContent:'center', alignItems:'center'}}>
                    <img src={QrImg} height={200} />
                    </div>
                    
                </Col>
            </Row>
        </div>
    )
}