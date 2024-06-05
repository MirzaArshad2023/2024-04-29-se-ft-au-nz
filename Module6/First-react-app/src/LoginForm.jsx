import { useState } from "react";
function LoginForm()
{
    const [firstName, setFirstName] = useState("")
    const [password, setPassword] = useState("")

    function Submit()
    {
      
    }
    function handlePasswordCheck(e)
    {
        let dataEntered = e.target.value
        
        setPassword(dataEntered)
      
        if(dataEntered.startsWith("m"))
        {
            alert("Password must not start with m")
        }
        
    }

    return(
        <>
            <div>
                <label>First Name:
                    <input type="text" name="txtFirstName" value={firstName} onChange={(e)=>setFirstName(e.target.value)}></input>
                </label>
            </div>
            <div>
                <label>Password:
                    <input type="password" name="txtPassword" value={password} onChange={(e)=>handlePasswordCheck(e)}></input>
                </label>
            </div>
            <div>
                <button onClick={Submit}>Submit</button>
            </div>
        </>
    
    )
}
export default LoginForm