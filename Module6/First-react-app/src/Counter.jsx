import { useState } from "react"
import { useEffect } from "react"
function Counter()
{
    const [count, setCount]= useState(0)
    const [count2, setDecreaseCount]= useState(0)
    console.log('Component loaded')
    
    useEffect(()=>{

        console.log('Use effect called')

    },[count2])
    
    function increaseCount()
    {
        setCount(count + 1)
    }
    function decreaseCount()
    {
        setDecreaseCount(count2 - 1)
    }
    return(

        <>
            <div>
                <label>Counter: {count}</label>
            </div>
            <div>
                <label>Counter: {count2}</label>
            </div>
            <div>
                <button onClick={increaseCount}>IncreaseCount</button>
            </div>
            <div>
                <button onClick={decreaseCount}>DecreaseCount</button>
            </div>
            
        </>
    )
}
export default Counter