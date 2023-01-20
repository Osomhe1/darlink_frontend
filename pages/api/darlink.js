import axios from 'axios'
import getConfig from './config';

const darlinkApi = axios.create({baseURL:getConfig(),
withCredentials:true,
})

export default darlinkApi;