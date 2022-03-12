import axios from 'axios';

const FICHIER_API_BASE_URL = 'http://localhost:8082/api/fichiers';

class FichierService{

  getFichiers(){
    return axios.get(FICHIER_API_BASE_URL);
  }

  postFichiers(data){
    return axios.post(FICHIER_API_BASE_URL, data);
  }
}

export default new FichierService();