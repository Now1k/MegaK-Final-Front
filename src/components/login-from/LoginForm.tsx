import {SyntheticEvent, useContext, useState} from "react";
import {LoggedUserContext} from "../../contexts/isLogged.context";
import {useNavigate} from "react-router-dom";

export const LoginForm = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {setLoggedUser} = useContext(LoggedUserContext);

    const [loading, setLoading] = useState(false)


    const navigate = useNavigate();

    const sendLoginData = async (e: SyntheticEvent) => {
        e.preventDefault();

        setLoading(true)

        try {
            const res = await fetch('http://localhost:3001/auth/login', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({
                    'email': email,
                    'pwd': password
                })
            })

            const data = await res.json()
            setLoggedUser(data);

            setEmail('');
            setPassword('');



            setTimeout(() => navigate('/'), 3000)

            return data

        } catch (e) {
            throw new Error('Something went wrong, please try again.')
        } finally {
            setLoading(false)
        }
    };

    if(loading) {
        return <h2>Please wait...</h2>
    }

    return <div className='login-form-container'>
        <form action="" onSubmit={sendLoginData}>

            <label>
                E-mail: <input type="email" required placeholder='e-mail' value={email} onChange={e => setEmail( e.target.value)}/>
            </label>

            <label>
                Password: <input type="password" required placeholder='password' value={password} onChange={e => setPassword(e.target.value)}/>
            </label>

            <p><a href="/">Return to homepage</a></p>

            <button type='submit'>Login</button>

        </form>
    </div>
}