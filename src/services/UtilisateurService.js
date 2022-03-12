import axios from 'axios';

const UTILISATEUR_API_BASE_URL = 'http://localhost:8082/api/utilisateurs';

class UtilisateurService{

  getUtilisateurs(){
    return axios.get(UTILISATEUR_API_BASE_URL);
  }

  postUtilisateurs(data){
    return axios.post(UTILISATEUR_API_BASE_URL, data);
  }
  
  getUtilisateur(id) {
    return axios.get(`http://localhost:8082/api/utilisateurs/${id}`)
  }

  updateUtilisateur(id, data) {
    return axios.put(`http://localhost:8082/api/utilisateurs/${id}`, data)
  }

  deleteUtilisateur(id) {
    return axios.delete(`http://localhost:8082/api/utilisateurs/${id}`)
  }
}

export default new UtilisateurService();