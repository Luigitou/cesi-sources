import axios from "axios";

const API_PATH = process.env.VUE_APP_URL_API;
const token = localStorage.getItem('user_token');

class FichierService {

  searchFile(searchValue) {
    return axios.get(`${API_PATH}/rechercheFichier?nom=${searchValue}`);
  }

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

  getImages() {
    return axios.get(API_PATH + "/getImages", {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
  }

  getDocuments() {
    return axios.get(API_PATH + "/getDocuments", {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
  }

  getVideos() {
    return axios.get(API_PATH + "/getVideos", {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
  }

  createFolder(idUtilisateur, idDossierParent, name, statut) {
    const data = new FormData();

    data.append("idUtilisateur", idUtilisateur);
    data.append("idDossierParent", idDossierParent);
    data.append("name", name);
    data.append("statut", statut);

    return axios.post(API_PATH + "/createDossier",
      data
    );
  }

  createFile(idUtilisateur, idDossierParent, statut, file) {
    const data = new FormData();

    data.append("idUtilisateur", idUtilisateur);
    data.append("idDossierParent", idDossierParent);
    data.append("statut", statut);
    data.append("file", file);

    return axios.post(API_PATH + "/createFichier",
      data
    )

  }

  getCommentaires(idFichier) {
    return axios.get(`${API_PATH}/getCommentaires?idFichier=${idFichier}`);
  }

  createCommentaire(idFichier, idUtilisateur, text) {
    const data = new FormData();
    data.append("idFichier", idFichier);
    data.append("idUtilisateur", idUtilisateur);
    data.append("text", text);

    return axios.post(API_PATH + "/createCommentaire",
      data
    )
  }

  getHeaderFromFile(idfichier) {
    return axios.get(`${API_PATH}/getHeaderFromFile?idFichier=${idfichier}`);
  }

  downloadFile(idFichier) {
    return axios.get(`${API_PATH}/downloadFile?idFichier=${idFichier}`, {
      responseType: 'blob'
    });
  }

}

export default new FichierService();