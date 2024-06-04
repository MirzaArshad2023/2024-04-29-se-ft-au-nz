function UserInfo(props)
{
    return(
        <div className="UserInfo"> {/* the user info is one aspect of the comment */}
                <img className="Avatar" src={props.author.avatarUrl} alt={props.author.name} />
                <div className="UserInfo-name">{props.author.name}</div>
        </div>
    )
}
export default UserInfo