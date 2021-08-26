import axios from 'axios';
import { useState } from 'react';
import { useHistory } from 'react-router';

function Create() {
  const [event, setTitle] = useState('');
  const [body, setDetails] = useState('');
  const [date, setDate] = useState('');
  const history = useHistory();
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const events = { event, body, date };
    axios
      .post('http://localhost:8000/events', JSON.stringify(events))
      .then((result) => {
        console.log('New event added');
        setIsPending(false);
        history.push('/');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className='create'>
      <h2>Add a new event</h2>
      <form onSubmit={handleSubmit}>
        <label>Event Title</label>
        <input
          type='text'
          required
          value={event}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Event Details</label>
        <textarea
          required
          value={body}
          onChange={(e) => setDetails(e.target.value)}
        ></textarea>
        <label>Date of the event</label>
        <input
          type='datetime'
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <button>Add Event</button>
      </form>
    </div>
  );
}

export default Create;
