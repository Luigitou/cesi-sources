<template>
  <modale v-bind:revele="revele" v-bind:toggleModale="toggleModale"></modale>
  <div class="header" >
    <div class="logo">
      <img src="../../../assets/Accueil/logo_transparent.png" alt="logo">
    </div>
    <div class="searchBar">
      <AutoComplete inputStyle="width:100%" class="Bar" v-model="searchValue" :suggestions="files" @complete="search($event)" placeholder="Search..." field="searchValue">
        <template #item="{ item }">
          <div>
            <div> ""Insert Image"" / Nom Fichier :  {{ item.nom }} / Date de Publication : {{ item.date }}</div>
          </div>
        </template>
      </AutoComplete>
    </div>
    <div v-on:click="toggleModale" class="Buttons">
      <Button icon="pi pi-user" class="p-button-raised p-button-rounded" label="Connexion"/>
    </div>  
  </div>
</template>

<script>
import Button from 'primevue/button';
import AutoComplete from 'primevue/autocomplete';
import FichierService from '../../../services/FichierServices'
import Modale from "../../navigation/Login/Modale.vue";

export default {
  name: "HeaderAcceuil",
  components: {
  Button,
  AutoComplete,
  Modale
  },
  data(){
    return{
      revele: false,
      searchValue: null,
      filteredFiles: [],
      files: [],
      items: [{
        label: 'Options',
        items: [{
          label: 'Update profile',
          icon: 'pi pi-user-edit',
          command: () => {
            this.$toast.add({severity:'success', summary:'Updated', detail:'Data Updated', life: 3000});
          }
        },
        {
          label: 'Delete account',
          icon: 'pi pi-times',
          command: () => {
            this.$toast.add({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted', life: 3000});
          }
        }]
      }],
    }
  },
  methods: {
    search(event) {
        setTimeout(() => {
            if (!event.query.trim().length) {
                this.filteredFiles = [...this.$data.files];
            }
            else {
              this.searchFiles();
              //console.log(this.$data.files, "Here") //Test pour verifier le centenu de files
                this.filteredFiles = this.$data.files.filter((file) => {
                    return file.name.toLowerCase().startsWith(event.query.toLowerCase());
                });
            }
        }, 250);
    },

    toggle(event) {
      this.$refs.menu.toggle(event);
    },

    toggleModale: function(){
      this.revele = !this.revele;
    },

    parseData(data) {
      this.$data.files = [];
      data.forEach((element) => {
        //console.log(element.nom)  //Test pour verifier le centenu de element
        this.$data.files.push({
          nom: element.nom,          
          date: element.dateCreation,
          membres: element.user,
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

    save() {
      this.$toast.add({severity: 'success', summary: 'Success', detail: 'Data Saved', life: 3000});
    }
  },
};
</script>

<style lang="scss" scoped>
@import "../../../scss/Variables.scss";
.header {
  color: $color-head;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  
  .logo {
    img{
      width: 30%;
    }
  }
  
  .searchBar{
    width: 50%;
    padding: 1%;
    margin-right: 20%;
    .Bar{
      width: 100%;
    }
  }
  .Buttons{
    width: 12%;
    padding: 1%;
    margin-right: 2%;

    .p-button-raised{
      background-color: $color-text;
      border: 1px solid $color-text;
    }
  }
}
</style>