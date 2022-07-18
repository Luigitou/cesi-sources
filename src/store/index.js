import { createStore } from "vuex";

export default createStore({
  state: {
    id: null,
    nom: "",
    prenom: "",
    mail: "",
    adresse: "",
    btnAdd: null
  }
})