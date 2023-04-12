import {SyntheticEvent, useContext, useState} from "react";
import {IsLoggedContext} from "../../contexts/isLogged.context";

export const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {isLoggedIn, setIsLoggedIn} = useContext(IsLoggedContext);

    const [loading, setLoading] = useState(false)

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

            setEmail('');
            setPassword('');

            setIsLoggedIn(data.isLogged);

            console.log(data.isLogged)






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

            <button type='submit'>Login</button>

        </form>
    </div>
}