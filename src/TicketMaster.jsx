import React, { useState, useEffect } from 'react';
import { Container, Row, Table } from 'reactstrap';

const baseURL = 'https://app.ticketmaster.com/discovery/v2/events.json?';
const key = 'PeCT8Lr36j8qgfWx3zqAQQeywUfNUvOc';

const EventFetch = (props) => {

  const lat = 39.970406
  const lon = -85.966848
  const url = `https://app.ticketmaster.com/discovery/v2/events.json?latlong=${lat},${lon}&apikey=${key}`
  

  const [fetchEvents, setFetchEvents] = useState([]);
  // const [name, setName] = useState([]);
  // const [date, setDate] = useState('');
  // const [type, setType] = useState('');
  // const [time, setTime] = useState('');
  // const [longitude, setLongitude] = useState('');
  // const [latitude, setLatitude] = useState('');

  const eventMapper = () => {
    return fetchEvents.map((event, index) =>{
      return(
        <tr key={index}>
          <td scope='row'>{event.name}</td>
          <td scope='row'>{event.type}</td>
          <td scope='row'>{event.dates.start.localDate}</td>
        </tr>
      )
    }
    )
  }
  useEffect(() => {
    fetch(url)
    .then((res) => {
      return res.json()
    }). then((data) => {
    console.log(data._embedded.events[0]);
    setFetchEvents(data._embedded.events)
    // setName(data._embedded.events[0].name);
    // setType(data._embedded.events[0].type);
    // setDate(data._embedded.events[0].dates.start.localDate);
    // setTime(data._embedded.events[0].dates.start.localTime);
    // setLongitude(data._embedded.events[0]._embedded.venue.location.longitude);
    // setLatitude(data._embedded.events[0]._embedded.venue.location.latitude);
    });
   }, []);

  return (
    <div className="App">
        <h3>Welcome to TicketMaster</h3>
        <Container>
          <Row>
            <table>
              <tbody>{eventMapper()} </tbody>           
            </table>
          </Row>
        </Container>
    </div>
  );
};

export default EventFetch;
