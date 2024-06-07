import { useState, useEffect } from "react";

function ActivityFinder() { // Fetches a random activity
    
    const [participants, setParticipants] = useState(1);

    const [activity, setActivity] = useState('');

    useEffect(() => {
        let ignore = false;
        console.log('use effect runs')
        fetch('https://fakestoreapi.com/products/' + participants)
            .then(response => response.json())
            .then(json => {
            if(!ignore)
                setActivity(json.category);
            });

        return () => {
            ignore = true
            console.log('cleanup called')
        }
    }, [participants]);

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