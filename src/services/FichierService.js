import axios from 'axios';

const FICHIER_API_BASE_URL = 'http://localhost:8082/api/fichiers';

class FichierService{

  researchFile(nom) {
    const params = new URLSearchParams();
    params.append("nom", nom);

  return axios.get(FICHIER_API_BASE_URL + "/recherche", params);
}

  getFichiers(){
    return axios.get(FICHIER_API_BASE_URL);
  }

  getAll() {
    return axios.get("http://localhost:8082/api/allFichiers")
  }

  postFichiers(data){
    return axios.post(FICHIER_API_BASE_URL, data);
  }
}

export default new FichierService();