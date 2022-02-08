import './App.css';
import EventFetch from './TicketMaster';
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
     <Nasa lat={lat}
     lon={lon}/> 
    </div>
  );
}

export default App;
