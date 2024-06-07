function FallbackError({ error, resetErrorBoundary }) {
    // Call resetErrorBoundary() to reset the error boundary and retry the render.
  
    return (
        <>
        <div role="alert">
            <p>Something went wrong:</p>
            <pre style={{ color: "red" }}>{error.message}</pre>
        </div>
        <div>
            <button onClick={() => resetErrorBoundary()}>Reset</button>
        </div>
      </>
    );
  }
  export default FallbackError