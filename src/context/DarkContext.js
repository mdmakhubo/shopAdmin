import { createContext, useReducer } from "react";
import DarkRuducer from './DarkReducer';
const INITIAL_STATE = {
    darkMode: false
}

export const DarkContext = createContext(INITIAL_STATE);


export const DarkContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(DarkRuducer, INITIAL_STATE)

    return <DarkContext.Provider value={{darkMode:state.darkMode, dispatch}}>{children}</DarkContext.Provider>
}