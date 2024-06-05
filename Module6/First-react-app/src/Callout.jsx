import FancyBox from "./FancyBox";
import './App.css'
function Callout(props) {
    return (
        <FancyBox color="blue">
            <h1 className="Callout-title">{props.title}</h1>
            <p className="Callout-message">{props.message}</p>
            {props.children} {/* everything in between the opening
    <Callout> and closing </Callout> tags */}
        </FancyBox>
    );
}

export default Callout