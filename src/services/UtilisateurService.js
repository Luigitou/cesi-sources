import axios from 'axios';

const UTILISATEUR_API_BASE_URL = 'http://localhost:8082/api/users';
const REGISTER_Api_URL = 'http://localhost:8082/api/public/register';

class UtilisateurService{

    getUtilisateurs() {

        return axios.get(UTILISATEUR_API_BASE_URL)
    }

    postUtilisateurs(data) {

        return axios.post(REGISTER_Api_URL, data)
    }

    getUtilisateur(id) {

        return axios.get(UTILISATEUR_API_BASE_URL + `/username` + `?=${id}`)
    }

    deleteUtilisateur(id) {

        return axios.delete(UTILISATEUR_API_BASE_URL + `/username` + `?=${id}`)
    }

    updateUtilisateur(id, data) {

        return axios.put(UTILISATEUR_API_BASE_URL + `/username` + `?=${id}`, data)

    }
    
    getAmi(){
      return axios.get(process.env.VUE_APP_URL_API + '1/ami');
    }
       
}

export default new UtilisateurService();