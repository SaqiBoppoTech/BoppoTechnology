import {React, createContext, useContext} from 'react'
const UserContext = createContext()
const AppProvider = UserContext.Provider 
const AppCosumer = UserContext.Consumer 
export const getGobalData = () => {
 return useContext(UserContext)
}
export {AppProvider,AppCosumer}
