<template>
  <div class="header" >
    <div class="searchBar">
      <AutoComplete inputStyle="width:100%" class="Bar" v-model="searchValue" :suggestions="filteredFiles" @complete="search($event)" placeholder="Search..." field="searchValue">
        <template #item="{ item }">
          <div>
            <div>{{ item }} {{ item }}</div>
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
      files: [ 
        "Photo3",
        "Photo2",
        "TPhoto1",
        "TPhoto2",
        "APhoto1",
        "APhoto1",
        "BPhoto2",
        "VPhoto1",
        "VPhoto2",
        ],
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
    search({ query }) {
      if (!query.trim()) {
        this.filteredFiles = [...this.files];
        return;
      }
      this.filteredFiles = this.files.filter((f) => f.includes(query));
    },
    toggle(event) {
      this.$refs.menu.toggle(event);
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

  .searchBar{
    width: 30%;
    margin: 0% 25% 0% 35%;
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