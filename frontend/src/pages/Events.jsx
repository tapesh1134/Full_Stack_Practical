import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Events = () => {
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/events');
        setEvents(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchEvents();
  }, []);
  const handleEventClick = (id) => {
    navigate(`/events/${id}`);
  };

  return (
    <div className="events-container">
      <h2>Upcoming Events</h2>
      <ul>
        {events.map((event) => (
          <li key={event._id} onClick={() => handleEventClick(event._id)} style={{ cursor: 'pointer' }}>
            <h3>{event.title}</h3>
            <p>{event.description}</p>
            <p>{new Date(event.date).toLocaleString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Events;
