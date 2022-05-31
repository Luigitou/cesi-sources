import axios from "axios";

const API_PATH = "http://localhost:8082";

class FichierService {

  getBase(idUtilisateur) {
    const params = new URLSearchParams();
    params.append("idUtilisateur", idUtilisateur);

    return axios.get(API_PATH + "/getBase", {
      params: params,
    });
  }


}

export default new FichierService();