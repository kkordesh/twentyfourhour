import './App.css';
import EventFetch from './TicketMaster';
import Weather from './Weather';
import Nasa from './Nasa'
import React, { useState, useEffect } from 'react';


function App() {
  const [lat, setLat] = useState('');
  const [lon, setLon] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLat(position.coords.latitude);
      setLon(position.coords.longitude);
  }, () => {
      console.log('cannot retrieve location')
  });
  }, []);

  return (
    <div>
      <EventFetch lat={lat}
     lon={lon}
/>
      <div className='weather'>
      <Weather lat={lat}
     lon={lon}/> 
     </div>
     <div className='nasa'>
     <Nasa lat={lat}
     lon={lon}/> </div> 
    </div>
  );
}

export default App;
