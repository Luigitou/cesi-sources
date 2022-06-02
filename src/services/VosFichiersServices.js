import axios from "axios";

const API_PATH = process.env.VUE_APP_URL_API;

class FichierService {

  getBase(idUtilisateur) {
    const params = new URLSearchParams();
    params.append("idUtilisateur", idUtilisateur);

    return axios.get(API_PATH + "/getBase", {
      params: params,
    });
  }

  getFilesFromFolder(idUtilisateur, idDossierParent) {
    const params = new URLSearchParams();
    params.append("idUtilisateur", idUtilisateur);
    params.append("idDossierParent", idDossierParent);

    return axios.get(API_PATH + "/getFichiers", {
      params: params
    })
  }


}

export default new FichierService();