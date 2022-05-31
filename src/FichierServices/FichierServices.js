import axios from 'axios';

const FICHIER_API_BASE_URL = 'http://localhost:8082/api';


class FichierService{

    searchFile(searchValue) {
        return axios.get(`${FICHIER_API_BASE_URL}/rechercheFichier?nom=${searchValue}`);
    }
}



export default new FichierService()