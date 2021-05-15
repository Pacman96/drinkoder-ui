import { useRef, useState } from "react";
import { Redirect } from "react-router";
import { useAuth } from "../../../services/auth";

const Register = () => {
    const { signup,user } = useAuth()

    const [loading, setLoading] = useState(false)

    const emailRef = useRef();
    const passwordRef = useRef();
    const usernameRef = useRef();

    const submit = e => {
        e.preventDefault()
        setLoading(true)
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const username = usernameRef.current.value;

        signup(email, password, username).then(user => setLoading(false))
    }

    if (user) return <Redirect to={{
        pathname: '/',
        state: {
            from: 'auth'
        }
    }} />

    return (
        <form onSubmit={submit}>
            <input disabled={loading} ref={usernameRef} placeholder='username' type='username' autoComplete='username'/>
            <input disabled={loading} ref={emailRef} placeholder='email' type='email' autoComplete='email'/>
            <input disabled={loading} ref={passwordRef} placeholder='password' type='password' autoComplete="current-password" />
            <button type='submit' disabled={loading}> create account </button>
        </form>
    )
}


export default Register