

const UserInfo =  () => {
   const email = localStorage.getItem('email');
   const username = localStorage.getItem('username')
   const role =localStorage.getItem('role');
   const passportUrl = localStorage.getItem('passportUrl')
   const button = localStorage.getItem('button')
   const link = localStorage.getItem('link')
   const infor = {
     username,
     role,
     email,
     passportUrl,
     link,
     button,
   }
   return infor;
}

export default UserInfo;
