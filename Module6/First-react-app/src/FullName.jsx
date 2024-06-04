import './App.css'
import NamePart from './NamePart'
function FullName(props) {
    return ( // composes the NamePart component to display a full name
        <div className="FullName componentBox">
            Full name: <NamePart value={props.first} /> <NamePart value={props.last} />
        </div>
    )
}
// add the above to FullName.jsx, then export it and import into App.jsx
export default FullName