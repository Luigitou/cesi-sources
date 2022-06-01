import axios from 'axios';

const FICHIER_API_BASE_URL = process.env.VUE_APP_URL_API;


class FichierService{

    searchFile(searchValue) {
        return axios.get(`${FICHIER_API_BASE_URL}rechercheFichier?nom=${searchValue}`);
    }
}



export default new FichierService()