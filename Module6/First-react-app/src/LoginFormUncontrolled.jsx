
function LoginFormUncontrolled()
{
    function Submit(e)
    {
        e.preventDefault()
        const data = new FormData(e.target)
        alert(data.get("txtFirstName"))
        alert(data.get("txtPassword"))
    }
   
    return(
        <>
            <form onSubmit={Submit}>
                <div>
                    <label>First Name:
                        <input type="text" id="txtFirstName" name="txtFirstName" defaultValue="smith"></input>
                    </label>
                </div>
                <div>
                    <label>Password:
                        <input type="password" id="txtPassword" name="txtPassword" defaultValue="xyz"></input>
                    </label>
                </div>
                <div>
                    <label>Select below:
                        <input type="checkbox" defaultChecked></input>
                    </label>
                </div>
                <div>
                    <button>Submit</button>
                </div>
            </form>
        </>
    
    )
}
export default LoginFormUncontrolled