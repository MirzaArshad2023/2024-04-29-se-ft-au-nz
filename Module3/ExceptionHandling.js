function checkJson(json) { // checks json argument for validity and ensures a name property
    try {
        const user = JSON.parse(json); // parse string into object
        if (!user.name) {
            throw new SyntaxError("Incomplete data: no name"); // we can throw our own custom errors
        }
        return true; // returns true (valid json) if no error was thrown above
    } catch (err) {
        if (err instanceof SyntaxError) { // once caught, we can do specific things based on error type
            console.log("JSON Error: " + err.message);
        } else {
            throw err; // rethrow other non-syntax errors; invalid json will still cause a crash
        }
    }
    finally
    {
        console.log('Finally')
    }
    
    return false; // returns false if any error occurred
}

checkJson('{"employee":"IOD"}')