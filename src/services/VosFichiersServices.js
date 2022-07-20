import axios from "axios";

const API_PATH = process.env.VUE_APP_URL_API;

class FichierService {
  searchFile(searchValue, token) {
    return axios.get(`${API_PATH}/rechercheFichier?nom=${searchValue}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  getBase(idUtilisateur, token) {
    const params = new URLSearchParams();
    params.append("idUtilisateur", idUtilisateur);

    return axios.get(API_PATH + "/getBase", {
      params: params,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  getFilesFromFolder(idUtilisateur, idDossierParent, token) {
    const params = new URLSearchParams();
    params.append("idUtilisateur", idUtilisateur);
    params.append("idDossierParent", idDossierParent);
    return axios.get(API_PATH + "/getFichiers", {
      params: params,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  getImages(token) {
    return axios.get(API_PATH + "/getImages", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  getDocuments(token) {
    return axios.get(API_PATH + "/getDocuments", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  getVideos(token) {
    return axios.get(API_PATH + "/getVideos", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  createFolder(idUtilisateur, idDossierParent, name, statut, token) {
    const data = new FormData();

    data.append("idUtilisateur", idUtilisateur);
    data.append("idDossierParent", idDossierParent);
    data.append("name", name);
    data.append("statut", statut);

    return axios.post(API_PATH + "/createDossier", data, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
  }

  createFile(idUtilisateur, idDossierParent, statut, file, token) {
    const data = new FormData();

    data.append("idUtilisateur", idUtilisateur);
    data.append("idDossierParent", idDossierParent);
    data.append("statut", statut);
    data.append("file", file);

    return axios.post(API_PATH + "/createFichier", data, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    });
  }

  getCommentaires(idFichier, token) {
    return axios.get(`${API_PATH}/getCommentaires?idFichier=${idFichier}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  createCommentaire(idFichier, idUtilisateur, text, token) {
    const data = new FormData();
    data.append("idFichier", idFichier);
    data.append("idUtilisateur", idUtilisateur);
    data.append("text", text);

    return axios.post(API_PATH + "/createCommentaire", data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  getHeaderFromFile(idfichier, token) {
    return axios.get(`${API_PATH}/getHeaderFromFile?idFichier=${idfichier}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  downloadFile(idFichier, token) {
    return axios.get(`${API_PATH}/downloadFile?idFichier=${idFichier}`, {
      responseType: "blob",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
}

export default new FichierService();
