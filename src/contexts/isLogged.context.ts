import { createContext } from "react";

export const LoggedUserContext = createContext({
    id: '',
    name: '',

    setLoggedUser: (d: object) => {}
})