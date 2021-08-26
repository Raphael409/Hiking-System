import Eventlist from "./eventList";
import useFetch from './usefetch';

const Home = () => {
    const{data: events, isPending, error} = useFetch(' http://localhost:8000/events');
    return ( 
        <div className="home">
            { error && <div>{ error } </div> }
            {isPending && <div> Loading ... </div>}
            { events && <Eventlist events={events} title = 'All Events'/>}
        </div>
     );
}
 
export default Home;