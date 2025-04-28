import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateEvent = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleCreateEvent = async (e) => {
    e.preventDefault();
    const eventData = {
      title,
      description,
      date,
    };

    try {
      const response = await axios.post('http://localhost:5000/api/events', eventData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      navigate('/events');
    } catch (err) {
      console.error(err);
      setError('Failed to create event. Please try again later.');
    }
  };

  return (
    <div className="create-event-container">
      <h2>Create a New Event</h2>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <form onSubmit={handleCreateEvent}>
        <div>
          <label>Event Title</label>
          <input
            type="text"
            placeholder="Event Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Description</label>
          <textarea
            placeholder="Event Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Event Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <button type="submit">Create Event</button>
      </form>
    </div>
  );
};

export default CreateEvent;
