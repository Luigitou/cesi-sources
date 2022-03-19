import axios from 'axios';

const FICHIER_API_BASE_URL = 'http://localhost:8082/api/fichiers';
const DOSSIER_API_BASE_URL = 'http://localhost:8082/api/dossiers';

class FichierService{

  getFichiers(){
    return axios.get(FICHIER_API_BASE_URL);
  }

  getDossier() {
    return axios.get(DOSSIER_API_BASE_URL);
  }

  postDossier(data) {
    return axios.post(DOSSIER_API_BASE_URL, 
      data,
    );
  }

  postFichiers(data){
    return axios.post(FICHIER_API_BASE_URL, 
      data,
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
    );
  }
}

export default new FichierService();