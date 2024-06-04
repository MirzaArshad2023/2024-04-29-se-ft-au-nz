import { Fifth } from "./Fifth";
import HelloWorld from "./HelloWorld";
function Pet(props) 
{ // add this to a new file Pet.jsx in the components folder
    let type = 'unknown'; // set default value for type
    if (props.type) type = props.type; // override with prop type if set (could also destructure with default)
    return (
        <div className="Pet componentBox">
            <h2>My Pet</h2> <p>Type: {type}</p>
            {/* if props.name is truthy (not undefined), render it in a <p> tag, otherwise render nothing */}
            {props.name ? <HelloWorld userName={props.name}></HelloWorld> : null}
            {/* Only render the <p> tag if the expression before the && is truthy */}
            {props.colour && <Fifth></Fifth>}
        </div>
    )
}
export default Pet; // render this component in App.jsx. Try out different prop values, add support for more