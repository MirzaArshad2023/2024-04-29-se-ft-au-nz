import { useState } from "react"
import { useRef } from "react"
function CounterDisplay()
{
    const [count, setCount] = useState(0)
    
    let anotherCounter = useRef(0)
    
    function startCounting()
    {
        setCount(count + 1)
        anotherCounter.current = anotherCounter.current + 1
    }
    return(
        <>
            <div>
                <p>Counter : {count}</p>
            </div>
            <div>
                <p>Another counter: {anotherCounter.current}</p>
            </div>
            <div>
                <button onClick={startCounting}>Count</button>
            </div>
        </>
    )
}
export default CounterDisplay