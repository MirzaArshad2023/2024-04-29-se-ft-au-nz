import { useState, useRef } from 'react';

export default function VideoPlayer() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [count, setCount]= useState(0)

    const videoRef = useRef(null); // 1. Create the ref

    function handleClick() {
        // use the current property of the ref object to access play and pause functions
        isPlaying ? videoRef.current.pause() : videoRef.current.play(); // 3. Use the ref to call DOM functions
        setIsPlaying(!isPlaying); // switch between playing and paused
    }
    return (
        <div className="VideoPlayer componentBox">
            {/* button to play or pause the video */}
            <p>Counter: {count}</p>
            <button onClick={handleClick}> {isPlaying ? 'Pause' : 'Play'} </button>
            <button onClick={()=> setCount(count + 1)}>Counter</button>
            {/* 2. Initialise the ref */}
            
            <video ref={videoRef} width="250">
                <source type="video/mp4"
                    src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" />
            </video>
        </div>
    );
}
// see https://react.dev/learn/manipulating-the-dom-with-refs for more examples