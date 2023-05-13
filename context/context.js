import { createContext, useContext, useState } from 'react'
import { useRouter } from 'next/router'
import React from 'react'

export const UserContext = React.createContext()

 function Context({ children }) {
   const [user, setUser] = useState()
   const [userToken, setUserToken] = useState()
   const [loading, setLoading] = useState(false)
   const [successMessage, setSuccessMessage] = useState('')
   const [errorMessage, setErrorMessage] = useState('')
   const userInfor ={
    role: '',
    email:'',
    username:'',
   }



  

   return (
     <UserContext.Provider value={{userInfor,
        user, 
        loading,
        userToken,
        setUserToken,
        successMessage,
        setSuccessMessage,
        setErrorMessage,
        errorMessage}}>
         {children}
     </UserContext.Provider>
   )
 }

 
 export default Context 

 export const ResetUser = () => {
   localStorage.setItem('userToken', null)
   localStorage.setItem('user', null)
   localStorage.setItem('username', null)
   localStorage.setItem('email', null)
 }