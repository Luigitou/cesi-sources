import axios from 'axios';

class UtilisateurService{

  getUtilisateurs(){
    return axios.get(process.env.VUE_APP_URL_API + 'utilisateurs');
  }

  getAmi(){
    return axios.get(process.env.VUE_APP_URL_API + '1/ami');
  }

postUtilisateurs(data) {

    return axios.post(process.env.VUE_APP_URL_API, data)
}

getUtilisateur(id) {

    return axios.get(process.env.VUE_APP_URL_API + `?=${id}`)
}

deleteUtilisateur(id) {

    return axios.delete(process.env.VUE_APP_URL_API + `?=${id}`)
}

updateUtilisateur(id, data) {

    return axios.put(process.env.VUE_APP_URL_API + `?=${id}`, data)

}
}

export default new UtilisateurService();