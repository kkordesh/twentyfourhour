
import React, { useState, useEffect } from 'react';



const baseURL = 'https://api.nasa.gov/planetary/earth/imagery'
const key = '1S6mGpqYmXLPl5kyQlvCibXVZYtq9Rb6hx6qxguF'


const Nasa = (props) => {
    const {lat, lon} = props
   
    const [results, setResults] = useState([]);
    


const fetchResults = () => {
    //const lon = navigator.geolocation.getCurrentPosition((position) => position.coords.longitude);
    //const lat = navigator.geolocation.getCurrentPosition((position) => position.coords.latitude);
    //let url =  `${baseURL}?&lon=${lon}&lat=${lat}&date=2014-03-01&api_key=${key}&dim=.5`
    //const lat = 39.768402
    //const lon = -86.158066

    

    let url =  `https://api.nasa.gov/planetary/earth/imagery?lon=${lon}&lat=${lat}&date=2020-02-07&api_key=${key}&dim=.5`
    
    fetch(url)
    // fetch("https://api.nasa.gov/planetary/earth/imagery?lon=100.75&lat=1.5&date=2014-02-01&api_key=1S6mGpqYmXLPl5kyQlvCibXVZYtq9Rb6hx6qxguF&dim=.5")
  .then(response => response.blob())
  .then(result => setResults(URL.createObjectURL(result)))
  .catch(error => console.log('error', error));
   }; 

//    const fetchResults = async () => {
//     try {
//         const response = await fetch (`${baseURL}`)
//     }


//    }

   const handleSubmit = (e) => {
   e.preventDefault();
   fetchResults();
   };

    return ( <div>
        <h1>Your Location:</h1>
        <img class="nasaimg" src={results} />
        <button type="submit" onClick={handleSubmit}>Find my location</button>
    </div> );
}
 
export default Nasa;