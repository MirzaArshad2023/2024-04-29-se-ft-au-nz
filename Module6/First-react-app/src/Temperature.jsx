// Child component to display and convert temp if needed
function Temperature({ temp, units = 'C' }) { // default to celcius
    // convert to Fahrenheit if units is F (or not C)
    let displayTemp = units === 'C' ? temp : (temp * 9 / 5) + 32
    return (
        <span class="Temperature">
            <strong> {parseInt(displayTemp)}&deg;{units} </strong>
        </span>
    )
}
// ++ Try adding a button to convert between C and F temps

export default Temperature;