

const UserInfo =  () => {
   const email = localStorage.getItem('email');
   const username = localStorage.getItem('username')
   const role =localStorage.getItem('role');
   const passportUrl = localStorage.getItem('passportUrl')
   const button = localStorage.getItem('button')
   const link = localStorage.getItem('link')
  const selectedPreview = localStorage.getItem('selectedPreview')
   const infor = {
     username,
     role,
     email,
     passportUrl,
     link,
     button,
     selectedPreview,
   }
   return infor;
}

export default UserInfo;
