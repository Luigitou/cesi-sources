import axios from 'axios';

const UTILISATEUR_API_BASE_URL = 'http://localhost:8082/api/utilisateurs';

class UtilisateurService{

    retrieveAllUsers() {

        return axios.get(UTILISATEUR_API_BASE_URL)
    }

    retrieveUser(id) {

        return axios.get(UTILISATEUR_API_BASE_URL + `${id}`)
    }

    deleteUser(id) {

        return axios.delete(UTILISATEUR_API_BASE_URL + `${id}`)
    }

    updateUser(id, utilisateur) {

        return axios.put(UTILISATEUR_API_BASE_URL + `${id}`, utilisateur)

    }

    createUser(utilisateur) {

        return axios.post(UTILISATEUR_API_BASE_URL, utilisateur);
    }   
}

export default new UtilisateurService();