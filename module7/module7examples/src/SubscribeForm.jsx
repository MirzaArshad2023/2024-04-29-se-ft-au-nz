import { useState } from "react";
import { useFormInput } from "./Hooks/useFormInput";
import { useContext } from "react";
import { UserContext } from "./UserProvider";
import LoginForm from "./LoginForm";

export default function SubscribeForm() {

    const [status, setStatus] = useState('');
    // similar state variables mapped to form inputs
    //const [firstName, setFirstName] = useState('Mary');
    const [inputFirstNameProps, resetFirstName] =  useFormInput('Mary')
    //const [email, setEmail] = useState('mary@poppins.com');
    const [inputEamilProps, resetEmail] = useFormInput('mary@poppins.com')

    const [inputPasswordProps, resetPassword] = useFormInput('')

    const {currentUser, handleUpdateUser} = useContext(UserContext)

    // similar handler functions
    //const handleNameChange = (e) => setFirstName(e.target.value);
    //const handleEmailChange = (e) => setEmail(e.target.value);

    function handleSubscribe() {
        //setFirstName(''); setEmail('');

        if(currentUser.email)
        {
            resetFirstName()
            resetEmail()
            resetPassword()
            setStatus('Thanks for subscribing!')
        }
        else
        {
            setStatus('Login the website')
            
        }
    }
    return (
        <div className="SubscribeForm componentBox">
            <label>First name: {/* form inputs with similar props */}
                <input {...inputFirstNameProps} />
            </label>
            <label>Email: {/* form inputs with similar props */}
                <input {...inputEamilProps} />
            </label>
            <label>
                <input type="password" {...inputPasswordProps} ></input>
            </label>
            <button onClick={handleSubscribe}>Subscribe</button>
            <div>{status}</div>
        </div>
    );
}