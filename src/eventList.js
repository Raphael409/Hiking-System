import { Link } from 'react-router-dom';

function Eventlist({ events, title }) {
  return (
    <div className='event-list'>
      <h2>{title}</h2>
      {events.map((event) => (
        <div className='event-preview' key={events.id}>
          <Link to={`/events/${event.id}`}>
            <h2>{event.event}</h2>
            <p>{event.date}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Eventlist;
