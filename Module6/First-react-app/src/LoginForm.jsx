import { useState } from "react";
function LoginForm()
{
    const [firstName, setFirstName] = useState("")
    const [password, setPassword] = useState("")
    const [submitResult, setSubmitResult] = useState("")

    function Submit(e)
    {
        e.preventDefault()
        if(firstName.length < 3)
            setSubmitResult("First name must be atleast 3 characters")
        else if(password.length < 5)
            setSubmitResult("Password must be atleast 5 characters")
        else
            setSubmitResult("Form submission successful")
    }
    

    return(
        <>
        <form onSubmit={Submit}>
            <div>
                <label>First Name:
                    <input type="text" name="txtFirstName" value={firstName} onChange={(e)=>setFirstName(e.target.value)}></input>
                </label>
            </div>
            <div>
                <label>Password:
                    <input type="password" name="txtPassword" value={password} onChange={(e)=>setPassword(e.target.value)}></input>
                </label>
            </div>
            <div>
                <button>Submit</button>
            </div>
            <div>
                {submitResult}
            </div>
        </form>
        </>
    
    )
}
export default LoginForm