import {NotLoggedPage} from "../not-logged-page/Not-Logged-Page";
import {UserStartPage} from "../user-start-page/UserStartPage";
import {RegistrationForm} from "../reg-form/Registration-Form";
import {useContext} from "react";
import {LoggedUserContext} from "../../contexts/isLogged.context";


export const MainSection = () => {

    const {id} = useContext(LoggedUserContext)

    if(!id) {
        return <><NotLoggedPage/><RegistrationForm /></>
    } else return <UserStartPage/>
}