

const UserInfo =  () => {
   const email = localStorage.getItem('email');
   const username = localStorage.getItem('username')
   const role =localStorage.getItem('role');
   const passportUrl = localStorage.getItem('passportUrl')
   const button = localStorage.getItem('button')
   const phone = localStorage.getItem('phone')
   const discord = localStorage.getItem('discord')
   const telegram = localStorage.getItem('telegram')
  const buttonId = localStorage.getItem('buttonId')
  const title = localStorage.getItem('title')
  const url = localStorage.getItem('url')
  const colour = localStorage.getItem('colour')
  const profileId = localStorage.getItem('profileId')

 
   const infor = {
     username,
     role,
     email,
     passportUrl,
     profileId,
     button,
     colour,
     selectedPreview: {
       email,
       phone,
       discord,
       telegram,
     },
     buttonId,
     link:{
      title, url
     }
   }
   return infor;
}

// export default UserInfo;

const clearPreview = () =>{
  localStorage.removeItem('discord')
  localStorage.removeItem('email')
  localStorage.removeItem('phone')
  localStorage.removeItem('telegram')
}

module.exports ={
  UserInfo,
  clearPreview,
}  
