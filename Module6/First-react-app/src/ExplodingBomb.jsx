import { useState } from "react";
function ExplodingBomb() {

    const [exploded, setExploded] = useState(false)

    return (
        <div className="ExplodingBomb componentBox">
            <button onClick={() => setExploded(!exploded)}>
                DANGER: Click to explode bomb!</button>

            {/* Renders the Bomb conditionally, depending on state */}
            {exploded ? <Bomb /> : null}
        </div>
    )
}
function Bomb() 
{
    throw new Error(' KABOOM ')
}
export default ExplodingBomb;