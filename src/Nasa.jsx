import React, { useState, useEffect } from 'react';


const baseURL = 'https://api.nasa.gov/planetary/earth/imagery?lon=100.75&lat=1.5&date=2014-02-01&api_key='
const key = '1S6mGpqYmXLPl5kyQlvCibXVZYtq9Rb6hx6qxguF'
console.log(baseURL)

const Nasa = (props) => {
    
       //const latitude = 20
      // const longitude = 20 

  const [results, setResults] = useState([]);

  
    const fetchResults = () => {
        fetch("https://api.nasa.gov/planetary/earth/imagery?lon=100.75&lat=1.5&date=2014-02-01&api_key=1S6mGpqYmXLPl5kyQlvCibXVZYtq9Rb6hx6qxguF&dim=.5")
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
        <h1>Hello from nasa</h1>
        <img src={results} />
        <button type="submit" onClick={handleSubmit}>Find my location</button>
    </div> );
}
 
export default Nasa;