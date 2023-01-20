const UserModule =require('./user');

exports.registerUser =async(username,password,email)=>{
    return await UserModule.register(username,password,email);
}
exports.getUsername =async(username)=>
 UserModule.username(username);
exports.userExist =async(userId)=>UserModule.checkUser(userId);
exports.getUserbyEmail =async(email)=>UserModule.userEmail(email);
