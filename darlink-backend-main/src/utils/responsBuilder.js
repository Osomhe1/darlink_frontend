const buildUser =(userObj)=>{
    const {UserId,Password,...data}=userObj;
    return data
}

const commonReponse =(msg,data,field='data',others={}, op=true)=>{
    const response ={
        success:op,
        msg,
        [field]:data,
        ...others,
    }
    return response;
}
module.exports ={
    buildUser,
    commonReponse,
}