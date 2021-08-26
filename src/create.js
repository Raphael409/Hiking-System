import { useState } from "react";
import { useHistory } from "react-router";

const Create = () => {

    const [event, setTitle] = useState("");
    const [body, setDetails] = useState("");
    const [date, setDate] = useState("");
    const history = useHistory();
    const [isPending, setIsPending] = useState(false)

    const handleSubmit=(e) => {
        e.preventDefault();
        const events ={ event, body, date };

        fetch (' http://localhost:8000/events', {method:'POST',
        headers: {"Content-Type": "application/json"},
        body:JSON.stringify(events)
        }).then(() => {
            console.log("New event added");
            setIsPending(false);
            history.push('/');
        })
    }

    return ( 
        <div className="create">
            <h2>Add a new event</h2>
            <form onSubmit={handleSubmit}>
                <label>Event Title</label>
                <input type="text" required  value={event}
                onChange={(e) => setTitle(e.target.value)}/>
                <label>Event Details</label>
                <textarea
                 required value={body}
                 onChange={(e) => setDetails(e.target.value)}>
                </textarea>
                <label>Date of the event</label>
                <input type="datetime" 
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
                    <button>Add Event</button>
            </form>
        </div>
     );
}
 
export default Create;