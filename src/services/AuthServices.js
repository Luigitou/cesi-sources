import axios from 'axios';

const API_PATH = process.env.VUE_APP_URL_API + '/login';

class AuthServices{

  auth(data){
    return axios.post(API_PATH, data);
  }
}

export default new AuthServices();