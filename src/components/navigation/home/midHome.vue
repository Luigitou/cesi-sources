<script>
import Carousel from "primevue/carousel";
import FichiersServices from "../../../services/VosFichiersServices";

export default {
  name: "MidHome",
  components: {
    Carousel,
  },
  data() {
    return {
      showNoFile: false,
      baseId: null,
      files: [],
      responsiveOptions: [
        {
          breakpoint: "1024px",
          numVisible: 3,
          numScroll: 3,
        },
        {
          breakpoint: "600px",
          numVisible: 2,
          numScroll: 2,
        },
        {
          breakpoint: "480px",
          numVisible: 1,
          numScroll: 1,
        },
      ],
    };
  },

  created() {
    this.getBaseId();
  },

  methods: {
    parseData(data) {
      this.$data.files = [];
      data.forEach((element) => {
        //console.log(element.nom)  //Test pour verifier le centenu de element
        this.$data.files.push({
          nom: element.nom,
          date: element.dateCreation,
          membres: element.user,
          etat: element.etat,
          taille: element.taille + " octets",
          type: element.type,
          id: element.id,
        });
      });
    },

    getBaseId() {
      FichiersServices.getBase(this.$store.state.id, this.$store.state.token)
        .then((response) => {
          this.$data.baseId = response.data.id;
        })
        .then(() => {
          this.loadUserFiles();
        });
    },

    openFile(id) {
      this.$router.push(`/fichier/${id}`);
    },

    loadUserFiles() {
      FichiersServices.getFilesFromFolder(
        this.$store.state.id,
        this.$data.baseId,
        this.$store.state.token
      ).then((response) => {
        this.parseData(response.data);

        if (response.data.length == 0) {
          this.showNoFile == true;
        }
      });
    },
  },
};
</script>

<template>
  <div class="MidHome">
    <div class="fistCarousel">
      <Carousel
        :value="files"
        :numVisible="3"
        :numScroll="3"
        :responsiveOptions="responsiveOptions"
        :circular="true"
        :autoplayInterval="3000"
      >
        <template #header>
          <div class="title">
            <h5>Vos Fichiers :</h5>
          </div>
          <a v-if="showNoFile"
            >Aucun fichier pour le moment :
            <span id="create_file">Créer un fichier</span></a
          >
        </template>
        <template #item="slotProps">
          <div class="user-items" @click="() => openFile(slotProps.data.id)">
            <div class="mb-3">
              <!-- Changement d'icone dynamique selon le type d'objet -->
              <span v-if="slotProps.data.type == 'png'"
                ><i class="pi pi-images" style="font-size: 2rem"></i
              ></span>
              <span v-else
                ><i class="pi pi-file" style="font-size: 2rem"></i
              ></span>
            </div>
            <div class="ObjectsInformations">
              <h4 class="mb-1">
                {{ slotProps.data.nom }} "{{ slotProps.data.etat }}"
              </h4>
              <h6 class="mt-0 mb-3">{{ slotProps.data.date }}</h6>
            </div>
          </div>
        </template>
      </Carousel>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../../scss/Global.scss";

.user-items {
  border: 1px solid var(--surface-border);
  border-radius: 3px;
  margin: 0.3rem;
  text-align: center;
  padding: 2rem 0;

  .ObjectsInformations {
    color: $color-android;
  }
}

.title {
  color: $color-android;
  display: flex;
  justify-content: center;
  padding: 1%;
}

.pi {
  color: $color-special;
}

#create_file {
  background-color: $color-special;
  padding: 10px;
  border-radius: 10px;
  color: #ffffff;
  cursor: pointer;
}

#no_file {
  display: none;
}

#create_file:hover {
  background-color: transparent;
  color: $color-special;
  border: 1px solid $color-special;
}

@media (max-width: 443px) {
  .MidHome {
    margin-top: 40px;
  }
}
</style>
