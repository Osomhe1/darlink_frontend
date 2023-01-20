const isValidEmail=(email)=>{
    let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
    return regex.test(email);
}

module.exports={
 isValidEmail,

}