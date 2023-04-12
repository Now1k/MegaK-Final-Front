import {SyntheticEvent, useState} from "react";

export const RegistrationForm = () => {

    const [form, setForm] = useState({
        name: '',
        email: '',
        password: ''
    });

    const updateForm = (key: string, value: any) => {
        setForm(form => ({
            ...form,
            [key]: value,
        }));
    };

    const submitForm = async (e: SyntheticEvent) => {
        e.preventDefault();

        const res = await fetch('http://localhost:3001/user/register', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                ...form,
            })
        })

        const data = await res.json()

        console.log(data)

        setForm({
            name: '',
            email: '',
            password: ''
        })

        return

    };



    return <form onSubmit={submitForm}>

        <label>
            Name: <input type="text" placeholder='name' value= {form.name} onChange={e => updateForm('name', e.target.value)}/>
        </label>

        <label>
            E-mail:<input type="email" placeholder='e-mail' value= {form.email} onChange={e => updateForm('email', e.target.value)}/>
        </label>

        <label>
            Password: <input type="password" placeholder='password' value= {form.password} onChange={e => updateForm('password', e.target.value)}/>
        </label>

        <button type='submit'>Register</button>
    </form>
}