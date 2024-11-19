import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const API_IMAGE = "https://image.tmdb.org/t/p/w500/";

export default function Home(){

    const [movies, setMovies] = useState([]);
    const navigate = useNavigate('');

    useEffect(()=>{
        async function getProducts(){
            const response = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=0ced3225fb7d16e4e6e8c93cf71e53ea&language=en-US&page=1');
            setMovies(response.data.results);
            // console.log(response.data.results);
        }
        getProducts();
    }, [])

    useEffect(() =>{
        const user = localStorage.getItem('userEmail');

        if(!user){
            navigate('/login');
        }
    }, [])

    const handleClick = (movie) => {
        navigate('/movie/' + movie.id, {state: movie})
    }
    return(
        <div style={{display:"flex", flexWrap:"wrap", padding: 30}}>
            {movies.map((movie)=>{
                return(
                    <div key={movie.id}>
                        <Card onClick={() => handleClick(movie) } style={{width:"20.2rem", padding:"25px", borderRadius:"22px", margin: 10, height: 450, overflow: "hidden"}}>
                            <Card.Img width={100} height={370} src={API_IMAGE + movie.poster_path}/>
                            <Card.Title style={{marginTop:'5px'}}>{movie.title}</Card.Title>
                            {/* <Card.Text>{movie.overview}</Card.Text> */}
                        </Card>
                    </div>   
                )
            })}
        </div>
    )
}