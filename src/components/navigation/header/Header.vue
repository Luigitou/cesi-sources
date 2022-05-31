<template>
  <div class="header" >
    <div class="searchBar">
      <AutoComplete inputStyle="width:100%" class="Bar" v-model="searchValue" :suggestions="files" @complete="search($event)" placeholder="Search..." field="searchValue">
        <template #item="{ item }">
          <div>
            <div>{{ item.nom }}</div>
          </div>
        </template>
      </AutoComplete>
    </div>
    <div class="Buttons"> 
      <Button icon="pi pi-cog" class="p-button-raised p-button-rounded" type="button" @click="toggle" aria-haspopup="true" aria-controls="overlay_menu" />
      <Menu id="overlay_menu" ref="menu" :model="items" :popup="true" />
      <Button icon="pi pi-bell" class="p-button-raised p-button-rounded" />
      <Button icon="pi pi-sign-out" class="p-button-raised p-button-rounded"/>
    </div>  
  </div>
</template>

<script>
import Button from 'primevue/button';
import AutoComplete from 'primevue/autocomplete';
import Menu from 'primevue/menu';
import FichierService from '../../../FichierServices/FichierServices'

export default {
  name: "Header",
  components: {
  Button,
  AutoComplete,
  Menu
  },
  data(){
    return{
      searchValue: null, // Paramètre d'entrée de la barre de recherche.
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
        }, 500);
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
        });
      });
    },

    searchFiles() {
      FichierService.searchFile(this.$data.searchValue).then((response) => {
        this.parseData(response.data);
        //console.log(response.data) //Test pour verifier le centenu de data
      });
    },
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

  .searchBar{
    width: 50%;
    margin: 0% 20% 0% 20%;
    .Bar{
      width: 100%;
    }
  }
  .Buttons{
    width: 10%;
    display: inline-flex;
    .p-button-raised{
      margin-left: 1%;
    }
  }
}
</style>
