import CONFIG from "./env";
// import '../../.env'
import '../../../.env'

const config = {
    API:()=>`${CONFIG.baseUrl()}/api/v1`,
    LOCAL_API:()=>`${CONFIG.baseUrl()}:${CONFIG.port()}/api/v1`,
}

const getConfig = () =>{
    // return config.LOCAL_API();
    return config.API();
}
export default getConfig;

// darlink.to
// www.darlink.to