import { useEffect, useState } from 'react';
import axios from axios;

const useFetch = (url) =>{

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(()=>{
            axios.get(url).then((data)=>{
                console.log(data);
                  setData(data);
                  setIsPending(false);
                  setError(null);
                  console.log('here');
            })
            .catch((err)=>{
                console.log(err);
                if (err.name ==='AbortError'){
                    console.log('fetch aborted');
                }
                else {
                  setIsPending(false);
                  setError(err.message);
                }
            })
        }, 1000);

        return() => abortCont.abort();
    },[url]);
}
export default useFetch;