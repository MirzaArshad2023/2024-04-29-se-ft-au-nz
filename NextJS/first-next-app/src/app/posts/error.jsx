'use client' // Error components must be Client Components

import { useEffect } from 'react'

// Save as app/posts/error.jsx
export default function Error({ error, reset }) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error)
    }, [error])

    return (
        <div>
            <h2>Something went wrong!</h2>
            <p>{error.message}</p>
            {/* Attempt to recover by trying to re-render the segment */}
            <button onClick={() => reset()}>
                Try again
            </button>
        </div>
    )
}
// Test it out by requesting a post id that doesn't exist, like
// http://localhost:3000/posts/500