import {useContext} from "react";
import {LoggedUserContext} from "../../contexts/isLogged.context";

export const Navbar = () => {

    const {name} = useContext(LoggedUserContext)

    return (

        <>
            <h1 className='App-name'>Mega Car Manager</h1>
            <ul className='nav-bar-items'>
                <p>Hello {name}</p>
                <li>Home</li>
                <li>Contact</li>
                <li></li>
            </ul>
        </>
    )
}