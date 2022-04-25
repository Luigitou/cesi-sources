import axios from 'axios';

const UTILISATEUR_API_BASE_URL = 'http://localhost:8082/api/utilisateurs';
const AMI_API_BASE_URL = 'http://localhost:8082/api/1/ami'; // Pourquoi 1 ?

class UtilisateurService{

  getUtilisateurs(){
    return axios.get(UTILISATEUR_API_BASE_URL);
  }

  postUtilisateurs(data){
    return axios.post(UTILISATEUR_API_BASE_URL, data);
  }
  
  getUtilisateur(id) {
    return axios.get(UTILISATEUR_API_BASE_URL + `?=${id}`)
  }

  updateUtilisateur(id, data) {
    return axios.put(UTILISATEUR_API_BASE_URL + `?=${id}`, data)
  }

  deleteUtilisateur(id) {
    return axios.delete(UTILISATEUR_API_BASE_URL + `?=${id}`)
  }

  getAmi(){
    return axios.get(AMI_API_BASE_URL);
  }

}

export default new UtilisateurService();