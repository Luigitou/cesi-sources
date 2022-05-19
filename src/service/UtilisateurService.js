import axios from 'axios';

class UtilisateurService{

  getUtilisateurs(){
    return axios.get(process.env.VUE_APP_URL_API + 'utilisateurs');
  }
}

export default new UtilisateurService();