import axios from 'axios';

const UTILISATEUR_API_BASE_URL = 'http://localhost:8082/api/utilisateurs';

class UtilisateurService{

    postUtilisateurs(data){
        return axios.post(UTILISATEUR_API_BASE_URL, data);
      }
}

export default new UtilisateurService();