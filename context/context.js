import { createContext, useContext, useState } from 'react'
import { useRouter } from 'next/router'

export const Message_data = createContext(null)

export const UserContext = createContext()

 function Context({ children }) {
   const [message, setMessage] = useState()
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
        // Logout,
        loading,
        userToken,
        setUserToken,
        successMessage,
        setSuccessMessage,
        setErrorMessage,
        // isUserAuthenticated,
        errorMessage}}>
       <Message_data.Provider value={{ message, setMessage }}>
         {children}
       </Message_data.Provider>
     </UserContext.Provider>
   )
 }
//  const router= useRouter()

   export const Logout = () => {
    //  setUserToken()
    //  setUser()

     localStorage.setItem('userToken', null)
     localStorage.setItem('user', null)
    //  router.push('/auth/Login')
   }

   export const isUserAuthenticated = () => !userToken

 export default Context 