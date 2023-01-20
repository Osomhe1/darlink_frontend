import { createContext, useContext, useState } from 'react'

export const Message_data = createContext(null)

export const UserContext = createContext()

 function Context({ children }) {
   const [message, setMessage] = useState()
   const userInfor ={
    role: '',
    email:'',
    username:'',
   }


   return (
     <UserContext.Provider value={userInfor}>
       <Message_data.Provider value={{ message, setMessage }}>
         {children}
       </Message_data.Provider>
     </UserContext.Provider>
   )
 }

 export default Context