import React,{useState, useEffect} from 'react'
import { useSubscriptionsContext } from '../hooks/useSubscriptionsContext'
// import { useWorkoutsContext } from '../hooks/useWorkoutsContext'

function SubscriptionForm() {
    const { dispatch } = useSubscriptionsContext();

    const [email, setEmail] = useState('');
    const [error, setError] = useState() //initialize with null
    const [mssg, setMssg] = useState();
    const [warn, setWarn] = useState();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const subscription = { email };
        // Clear previous messages
    setError(null);
    setMssg(null);
    setWarn(null);


        const response = await fetch("/api/subscriptions", {
          method: "POST",
          body: JSON.stringify(subscription),
          headers: {
            "Content-Type": "application/json",
          },
        });
        const json = await response.json();
        if (response.ok) {
            setEmail("");
            // setError() // Reset error on success
            console.log("new subscription added", json);
            setMssg(json.mssg);           

            //dispatch action to add the new subscription to the context 
            dispatch({ type: 'CREATE_SUBSCRIPTION', payload: json });
        } else {
            // setError(json.error); //Set error message
            if (json.error) {
                setError(json.error);
            }else if(json.warn){
            setWarn(json.warn); //set warning message
        }} 
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setMssg(null)
            setWarn(null);
            setError(null);
        }, 5000);
        return()=> clearTimeout(timer)
    })
  return (
    <div>
      <form action="" onSubmit={handleSubmit} className="flex gap-4">
        <input type="text" className="bg-slate-300 p-2" value={email} onChange={(e)=> setEmail(e.target.value)} />
        <button className="bg-cyan-300 py-2 px-4 rounded-lg"> Subscribe</button>
        {error && (
          <div className="text-red-500 border border-red-500 bg-red-100 p-2 mt-4">
                      {error}
          </div>
        )}
        {mssg && (
          <div className="text-green-500 border border-green-500 bg-green-100 p-2 mt-4">
                      {mssg}
          </div>
        )}
        {warn && (
          <div className="text-yellow-500 border border-yellow-500 bg-yellow-100 p-2 mt-4">
                      {warn}
          </div>
        )}
      </form>
    </div>
  );
}

export default SubscriptionForm