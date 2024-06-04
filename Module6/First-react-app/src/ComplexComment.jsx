import UserInfo from "./UserInfo";
function ComplexComment(props) { // complex component which displays different elements of a comment
    return (
        <div className="Comment componentBox">
            <UserInfo author={props.author}></UserInfo>
            <div className="Comment-text"> {/* the actual comment text is another aspect */}
                {props.text}
            </div>
            <div className="Comment-date"> {/* the comment date is another aspect */}
                {props.date.toLocaleString()}
            </div>
        </div>
    );
} // save in a new file ComplexComment.jsx, then export it and import into App.jsx
export default ComplexComment