import axios from 'axios';

const AUTH_API_BASE_URL = 'http://localhost:8082/api/auth';

class AuthServices{

  auth(data){
    return axios.post(AUTH_API_BASE_URL, data);
  }
}

export default new AuthServices();