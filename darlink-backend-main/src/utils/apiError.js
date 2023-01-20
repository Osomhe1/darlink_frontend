class APIError extends Error{
    constructor(msg,status){
        super(msg);
        this.status=status;
    }
static notFound=(msg="Rount not Found",status=404)=>{
    return new this(msg,status);
}
static badRequest(msg= `Invalid Request`, status = 400){
    return new this(msg, status)
}
static unauthorized(msg, status = 401){
    const message = msg || `You don't have required permission`
    return new this(message, status)
}
static unauthenticated(msg, status = 401){
    const message = msg || `You need to login first in order to have access.`
    return new this(message, status)
}
static customError(msg = 'Unknown Error', status = 500){
    return new this(msg, status)
}
}

module.exports={
    APIError,
}