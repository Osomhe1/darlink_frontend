import CONFIG from "./env";

const config = {
   API:()=>`${CONFIG.baseUrl()}/api/v1`,   
    LOCAL_API:()=>`${CONFIG.localUrl()}:${CONFIG.port()}/api/v1`,  
}

const getConfig = () =>{
    return config.LOCAL_API(); //comment this when you want to push to git
    //  return config.API(); //comment this when you want to run on local server
    //one of the two lines of codes must be uncommented.
}
export default getConfig;

// darlink.to
// www.darlink.to