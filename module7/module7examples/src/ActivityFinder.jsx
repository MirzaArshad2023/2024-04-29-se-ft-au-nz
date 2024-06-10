import { useState, useEffect } from "react";
import { useData } from "./Hooks/useData";
import { useContext } from "react";
import { UserContext } from "./UserProvider";

function ActivityFinder() { // Fetches a random activity
    
    const [participants, setParticipants] = useState(1);
    const {currentUser, handleUpdateUser} = useContext(UserContext)
    //const [activity, setActivity] = useState('');

    const data = useData('https://fakestoreapi.com/products/' + participants)

    let activity = data? data.category : 'not found'

    if(currentUser.email)
    {
        //do nothing
    }
    else
        return (<> </>)
    
   
    return (
        <div className="ActivityFinder componentBox">
            <h3>Activity Finder</h3>
            <label>Choose number of participants:
                <select value={participants}

                    onChange={e => setParticipants(e.target.value)}>
                    <option>1</option>
                    <option>6</option>
                    <option>9</option>
                </select>
            </label>
            <div><strong>Suggested Category: </strong>{activity}</div>
        </div>
    )
}

export default ActivityFinder