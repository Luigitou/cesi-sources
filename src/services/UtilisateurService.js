import axios from 'axios';

const UTILISATEUR_API_BASE_URL = process.env.VUE_APP_URL_API + '/users';
const REGISTER_Api_URL = process.env.VUE_APP_URL_API + '/public/register';

class UtilisateurService{

    getUtilisateurs(token) {

        return axios.get(UTILISATEUR_API_BASE_URL + '/utilisateurs', {
            headers: {
                'Authorization': `Bearer ${token}` 
            }
        })
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
    
    getAmi(id_utilisateur, token){
      return axios.get(UTILISATEUR_API_BASE_URL + '/ami' + `?id_utilisateur=${id_utilisateur}`, {
        headers: {
            'Authorization': `Bearer ${token}` 
        }
      });
    }

    addAmi(id_utilisateur, id_ami, token){
        return axios.post(UTILISATEUR_API_BASE_URL + '/addAmi' + `?id_utilisateur=${id_utilisateur}&` + `id_ami=${id_ami}`, {
            headers: {
                'Authorization': `Bearer ${token}` 
            }
        });
    }

    deleteAmi(id_utilisateur, id_ami, token){
        return axios.delete(UTILISATEUR_API_BASE_URL + '/deleteAmi' + `?id_utilisateur=${id_utilisateur}&` + `id_ami=${id_ami}`, {
            headers: {
                'Authorization': `Bearer ${token}` 
            }
        });
    }
       
}

export default new UtilisateurService();