import {createContext} from "react";


export const AuthContext = createContext({
    token:null,
    userId:null,
    links:null,
    login: () => {},
    logout: () => {},
    isAuthenticated:false,
})
