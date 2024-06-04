import './App.css'
function NamePart(props) {
    return ( // reusable component to display part of a name from the value prop
        <span className="NamePart">{props.value}</span>
    )
}
export default NamePart