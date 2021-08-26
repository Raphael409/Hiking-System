import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';
import useFetch from './usefetch';

function EventDetails() {
  const { id } = useParams();
  const {
    data: events,
    error,
    isPending,
  } = useFetch('http://localhost:8000/events/' + id);
  const history = useHistory();

  const handleClick = () => {
    axios
      .delete(`http://localhost:8000/events/${events.id}`)
      .then((result) => {
        history.push('/');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className='event-details'>
      {isPending && <div>Loading ...</div>}
      {error && <div>{error}</div>}
      {events && (
        <article>
          <h2>{events.event}</h2>
          <p>Happenning on {events.date}</p>
          <div>{events.body}</div>
          <button onClick={handleClick}>Delete</button>
        </article>
      )}
    </div>
  );
}

export default EventDetails;
