import { createContext } from "react";

export const IsLoggedContext = createContext({
    isLoggedIn: false,
    setIsLoggedIn: (s: boolean) => {}
})