import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "./UserProvider";
import { MyThemeContext } from "./MyThemeProvider";

function LoginForm() {
    // input state values always need to be strings - empty initially
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [submitResult, setSubmitResult] = useState('');
    //const  {currentUser, setCurrentUser} = useContext(ContextPersisted)
    const {currentUser, handleUpdateUser} = useContext(UserContext)
    const { theme, setTheme, darkMode} = useContext(MyThemeContext)

    const handleSubmit = (e) => {
        e.preventDefault(); // prevent page reloading on form submit
        // add some password validation
        if (userPassword.length < 5) {
            setSubmitResult('Password must be at least 5 characters long');
        } else if (userPassword === userEmail) {
            setSubmitResult('Password must not match email address');
        } else {
            setUserEmail('')
            setUserPassword('')
            setSubmitResult('Successful login.');
            handleUpdateUser({email: userEmail})
        }
       
        //setCurrentUser({email: userEmail})
    }
    function logout(user)
    {
        handleUpdateUser(user)
    }

    if (currentUser && currentUser.email) return (
        <>
            <p>Welcome {currentUser.email}!</p>
            <button onClick={() => logout({})}>Log Out</button>
        </>
    );

    return (
        <div className="LoginForm componentBox">
            <form onSubmit={handleSubmit}>
                <div className="formRow">
                        <label style={{background: theme.background}}>Email Address:
                                <input type="email" value={userEmail} name="userEmail"
                                onChange={(e) => setUserEmail(e.target.value)} />
                        </label>
                </div>
                <div className="formRow">
                        <label style={{background: theme.foreground}}>Password:
                            <input type="password" value={userPassword} name="password"
                                onChange={(e) => setUserPassword(e.target.value)} />
                        </label>
                </div>
                <button>Log In</button>
                <p>{submitResult}</p>
            </form>
       </div>
        


    )
}
// try removing the onChange prop and typing in a field
export default LoginForm