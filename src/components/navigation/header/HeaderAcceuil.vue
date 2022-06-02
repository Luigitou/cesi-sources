<template>
  <div class="header" >            
    <div class="wrapperLogo">
      <router-link to="/">
          <img src="../../../../assets/logo.png" class="logo" alt="Logo"/>
      </router-link>
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
    <div class="Buttons">
      <Button icon="pi pi-user" class="p-button-raised p-button-rounded" label="Connexion"/>
    </div>  
  </div>
</template>

<script>
import Button from 'primevue/button';
import AutoComplete from 'primevue/autocomplete';
import FichierService from '../../../FichierServices/FichierServices'

export default {
  name: "HeaderAcceuil",
  components: {
  Button,
  AutoComplete
  },
  data(){
    return{
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
  display: inline-flex;
  justify-content: space-between;
  
  .wrapperLogo {
    width: 15%;
    //position: absolute;
    position: static;
    top: 10;
    .logo {
      width: 40%;
    }
  }

  .searchBar{
    width: 50%;
    padding: 1%;
    .Bar{
      width: 100%;
    }
  }
  .Buttons{
    width: 12%;
    display: inline-flex;
    padding: 1%;
  }
}
</style>