import axios from 'axios';

const UTILISATEUR_API_BASE_URL = 'http://localhost:8082/api/users';
const REGISTER_Api_URL = 'http://localhost:8082/api/public/register';

const token = localStorage.getItem('user_token');

class UtilisateurService{

    getUtilisateurs() {

        return axios.get(UTILISATEUR_API_BASE_URL, {
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
    
    getAmi(id_utilisateur){
      return axios.get(process.env.VUE_APP_URL_API + 'ami' + `?id_utilisateur=${id_utilisateur}`, {
        headers: {
            'Authorization': `Bearer ${token}` 
        }
      });
    }

    addAmi(id_utilisateur, id_ami){
        return axios.post(process.env.VUE_APP_URL_API + 'addAmi' + `?id_utilisateur=${id_utilisateur}&` + `id_ami=${id_ami}`, {
            headers: {
                'Authorization': `Bearer ${token}` 
            }
        });
    }

    deleteAmi(id_utilisateur, id_ami){
        return axios.delete(process.env.VUE_APP_URL_API + 'deleteAmi' + `?id_utilisateur=${id_utilisateur}&` + `id_ami=${id_ami}`, {
            headers: {
                'Authorization': `Bearer ${token}` 
            }
        });
    }
       
}

export default new UtilisateurService();