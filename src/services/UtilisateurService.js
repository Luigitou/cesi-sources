import axios from 'axios';

class UtilisateurService{

  getUtilisateurs(){
    return axios.get(process.env.VUE_APP_URL_API + 'utilisateurs');
  }

  getAmi(){
    return axios.get(process.env.VUE_APP_URL_API + '1/ami');
  }
}

export default new UtilisateurService();