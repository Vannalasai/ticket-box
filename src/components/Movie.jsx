import React, { useEffect, useState } from "react";
import { Row , Col, Button } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const API_IMAGE = "https://image.tmdb.org/t/p/w500/";
const TIMINGS = ["10:00 AM", "02:00 PM", "05:00 PM", "08:30 PM"];

export default function Movie() {

    const location = useLocation();
    const {title, overview, poster_path} = location.state;
    const [latLng, setLatLng] = useState({});
    const [theatres, setTheatres] = useState([]);
    const navigate = useNavigate('');

    useEffect(() => {
        if('geolocation' in navigator){
            navigator.geolocation.getCurrentPosition((position) => {
                setLatLng({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                })
            })
        }
    }, [])

    useEffect(() => {
        if(Object.keys(latLng).length > 0){
            const geoAPI = `https://api.geoapify.com/v2/places?categories=entertainment.cinema&filter=circle:78.4740613,17.360589,10000&bias=proximity:78.4740613,17.360589&limit=20&apiKey=d3eba6ce6a014eee8668f26b116e3624`;
            axios.get(geoAPI).then(res => {
                console.log(res.data)
                const featuresArr = res.data.features;
                const names = [];
                featuresArr.map((feature) => names.push(feature.properties.name));  
                setTheatres(names);
            })
        }
    }, [latLng])

    return(
        <div>
            <Row>
                <Col>
                    <div style={{padding:60}}>
                        <img style={{marginBottom:24, borderRadius: 8}} src={API_IMAGE+poster_path} width={250} height={350} /> 
                        <h4>{title}</h4>
                        <div>{overview}</div>
                    </div>  
                </Col>
                <Col>
                    <div style={{padding:60}}>
                        {
                            theatres.map((theatre , index) => {
                                return(
                                    <div key={index} style={{marginBottom:20}}>
                                        <h4 style={{marginBottom: 10}}>{theatre}</h4>
                                        {
                                            TIMINGS.map((time) => {
                                                return(<Button onClick={
                                                    () => navigate('/select', {state: {title: title}})
                                                } key={time} style={{marginRight:20}}>{time}</Button>)
                                            })
                                        }
                                    </div>
                                )
                            }) 
                        }
                    </div>
                    
                </Col>
            </Row>
        </div>
    )
}