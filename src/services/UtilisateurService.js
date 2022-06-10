import axios from 'axios';

const UTILISATEUR_API_BASE_URL = 'http://localhost:8082/api/utilisateurs';

class UtilisateurService{

    getUtilisateurs() {

        return axios.get(UTILISATEUR_API_BASE_URL)
    }

    postUtilisateurs(data) {

        return axios.post(UTILISATEUR_API_BASE_URL, data)
    }

    getUtilisateur(id) {

        return axios.get(UTILISATEUR_API_BASE_URL + `?=${id}`)
    }

    deleteUtilisateur(id) {

        return axios.delete(UTILISATEUR_API_BASE_URL + `?=${id}`)
    }

    updateUtilisateur(id, data) {

        return axios.put(UTILISATEUR_API_BASE_URL + `?=${id}`, data)

    }
    
    getAmi(){
      return axios.get(process.env.VUE_APP_URL_API + '1/ami');
    }

    addAmi(data){
      return axios.post(process.env.VUE_APP_URL_API + 'ami', data);
    }
       
}

export default new UtilisateurService();