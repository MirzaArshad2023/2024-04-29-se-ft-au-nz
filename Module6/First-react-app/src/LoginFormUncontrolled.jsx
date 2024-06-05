
function LoginFormUncontrolled()
{
    function Submit()
    {
      alert(document.getElementById("txtFirstName").value)
      alert(document.getElementById("txtPassword").value)
    }
   
    return(
        <>
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
                <button onClick={Submit}>Submit</button>
            </div>
        </>
    
    )
}
export default LoginFormUncontrolled