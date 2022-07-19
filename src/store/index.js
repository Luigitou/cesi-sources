import { createStore } from "vuex";

export default createStore({
  state: {
    id: null,
    nom: "",
    prenom: "",
    mail: "",
    adresse: "",
    btnAdd: null,
    nombreImages: 0,
    nombreDocuments: 0,
    nombreVideos: 0
  }
})