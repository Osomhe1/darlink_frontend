

const UserInfo =  () => {
   const email = localStorage.getItem('email');
   const username = localStorage.getItem('username')
   const role =localStorage.getItem('role');
   const passportUrl = localStorage.getItem('passportUrl')
   const infor = {
     username,
     role,
     email,
     passportUrl,
   }
   return infor;
}

export default UserInfo;
