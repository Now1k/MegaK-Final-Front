import {NotLoggedPage} from "../not-logged-page/Not-Logged-Page";
import {UserStartPage} from "../user-start-page/UserStartPage";
import {RegistrationForm} from "../reg-form/Registration-Form";


export const MainSection = () => {

    const isLogged = false;

    if(!isLogged) {
        return <><NotLoggedPage/><RegistrationForm /></>
    } else return <UserStartPage/>
}