import axios from 'axios';

const UTILISATEUR_API_BASE_URL = 'http://localhost:8082/api/utilisateurs';

class UtilisateurService{

  getUtilisateurs(){
    return axios.get(UTILISATEUR_API_BASE_URL);
  }

  postUtilisateurs(data){
    return axios.post(UTILISATEUR_API_BASE_URL, data);
  }
}

export default new UtilisateurService();