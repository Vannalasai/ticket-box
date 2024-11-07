import React, { useEffect, useState } from "react";
import { Row , Col , Button } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";

export default function SelectSeat(){
    const location = useLocation();
    const navigate = useNavigate();
    const {title} = location.state;
    const [seatMatrix, setSeatMatrix] = useState([]);
    const [selectedSeats, setSelectedSeats] = useState([]);

    const createSeats = () => {
        let totalRows = 5;
        let numberofSeatsInRow = 8;
        let tempSeats = [];
        let row = 0;
        let ch = 'A';
        while(row < totalRows) {
            let col = 1;
            let rowArr = [];
            while(col <= numberofSeatsInRow){
                rowArr.push(ch+col);
                col++;
            }
            tempSeats.push(rowArr);
            row++;
            ch = String.fromCharCode(ch.charCodeAt(0) + 1);
        }
        // console.log(tempSeats);
        setSeatMatrix(tempSeats);
    }

    useEffect( () => {
        createSeats();
    }, [])

    const handleSelect = (newSeat) => {
        setSelectedSeats([...selectedSeats, newSeat]);
    }

    return(
        <div style={{padding: 50}}>
            <div>
                <h3 className="d-inline-block">{title}</h3>
                <div style={{marginLeft: 450}} className="d-inline-block">Screen this side</div>
            </div>
            <div style={{marginTop: 45}}>
                {
                    seatMatrix.map((seatsArr) => {
                        return(
                            <Row style={{marginBottom: 20}}>
                            {seatsArr.map((seat) => {
                                let isSelected = selectedSeats.indexOf(seat) > -1;
                                return(
                                    <Col>
                                        <Button style={{backgroundColor: isSelected ? "green" : "grey", border:'none', }} onClick={() => handleSelect(seat)}>{seat}</Button>
                                    </Col>
                                )
                            })}
                            </Row>
                        )
                    })
                }
            </div>
            <div style={{marginTop: 45}}>
                {
                    selectedSeats.length > 0 ? 
                    <div >
                        {
                            selectedSeats.map((seat) => {
                                return <span style={{marginRight:10}}>{seat}</span>
                            })
                        }
                        seat selected

                        <div>
                            <h4> Total Rs. {selectedSeats.length * 150}</h4>
                            <Button onClick={() => navigate('/success')}>Checkout</Button>
                        </div>
                    </div> :
                    <div>No seats selected</div>
                }
            </div>
        </div>
    )
}