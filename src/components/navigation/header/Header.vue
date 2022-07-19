<template>
  <div class="header">
    <div class="greetings">
      <p>
        <span class="default-text">Bonjour, </span
        ><span class="dynamic-name">Louis</span>
      </p>
    </div>
    <div class="searchBar">
      <AutoComplete
        inputStyle="width:100%"
        class="Bar"
        v-model="searchValue"
        :suggestions="files"
        @complete="search($event)"
        placeholder="Search..."
        field="searchValue"
      >
        <template #item="{ item }">
          <div>
            <div>
              <span v-if="item.type == 'png'"
                ><i class="pi pi-images" style="font-size: 2rem"></i
              ></span>
              <span v-else
                ><i class="pi pi-file" style="font-size: 2rem"></i
              ></span>
              / Nom Fichier : {{ item.nom }} / Date de Publication :
              {{ item.date }} / Etat: {{ item.etat }}
            </div>
          </div>
        </template>
      </AutoComplete>
    </div>
    <div class="Buttons">
      <Button
        icon="pi pi-cog"
        class="p-button-raised p-button-rounded"
        type="button"
        @click="toggle"
        aria-haspopup="true"
        aria-controls="overlay_menu"
      />
      <Menu id="overlay_menu" ref="menu" :model="items" :popup="true" />
      <Button icon="pi pi-bell" class="p-button-raised p-button-rounded" />
      <Button
        icon="pi pi-sign-out"
        class="p-button-raised p-button-rounded"
        @click="toAccueil"
      />
    </div>
  </div>
</template>

<script>
import Button from "primevue/button";
import AutoComplete from "primevue/autocomplete";
import Menu from "primevue/menu";
import FichierService from "../../../services/VosFichiersServices";

export default {
  name: "Header",
  components: {
    Button,
    AutoComplete,
    Menu,
  },
  data() {
    return {
      searchValue: null, // Paramètre d'entrée de la barre de recherche.
      filteredFiles: [],
      files: [],
      items: [
        {
          label: "Options",
          items: [
            {
              label: "Modifier profile",
              icon: "pi pi-user-edit",
              command: () => {
                //this.$toast.add({severity:'success', summary:'Updated', detail:'Data Updated', life: 3000});
                this.$router.push("/profil");
              },
            },
            {
              label: "Options",
              items: [
                {
                  label: "Modifier profile",
                  icon: "pi pi-user-edit",
                  command: () => {
                    this.$toast.add({
                      severity: "success",
                      summary: "Updated",
                      detail: "Data Updated",
                      life: 3000,
                    });
                  },
                },
                {
                  label: "Passer Admin",
                  icon: "pi pi-user",
                  command: () => {
                    // this.$toast.add({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted', life: 3000});
                    this.$router.push("/admin");
                  },
                },
                {
                  label: 'Passer Super-admin',
                  icon: 'pi pi-user-plus',
                  command: () => {
                    this.$router.push("/superadmin");
                  }
                },
                {
                  label: "Supprimer compte",
                  icon: "pi pi-times",
                  command: () => {
                    this.$toast.add({
                      severity: "warn",
                      summary: "Delete",
                      detail: "Data Deleted",
                      life: 3000,
                    });
                  },
                },
              ],
            },
          ],
        },
      ],
    };
  },
  methods: {
    search(event) {
      setTimeout(() => {
        if (!event.query.trim().length) {
          this.filteredFiles = [...this.$data.files];
        } else {
          this.searchFiles();
          //console.log(this.$data.files, "Here") //Test pour verifier le centenu de files
          this.filteredFiles = this.$data.files.filter((file) => {
            return file.name
              .toLowerCase()
              .startsWith(event.query.toLowerCase());
          });
        }
      }, 250);
    },

    toggle(event) {
      this.$refs.menu.toggle(event);
    },

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
        });
      });
    },

    searchFiles() {
      FichierService.searchFile(this.$data.searchValue).then((response) => {
        this.parseData(response.data);
        //console.log(response.data) //Test pour verifier le centenu de data
      });
    },

    toAccueil() {
      window.location.href = "/";
    },
    getUserName() {
      return localStorage.getItem("nom");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../../scss/Variables.scss";

.header {
  color: $color-head;
  background-color: $color-head;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: 1% 0 1% 0;

  .greetings {
    width: 15%;
    font-size: 1.5rem;
    font-weight: bold;

    .default-text {
      color: $color-text;
    }

    .dynamic-name {
      color: $color-special;
    }
  }

  .searchBar {
    width: 50%;
    padding: 1%;
    .Bar {
      width: 100%;
    }
  }

  .Buttons {
    width: 12%;
    display: inline-flex;
    padding: 1%;

    .p-button-raised {
      margin-left: 5%;
      background-color: $color-android;
      border: 1px solid $color-button;
    }
  }
}
</style>
