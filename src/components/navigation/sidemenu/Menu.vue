<template>
  <nav class="menu">
    <div class="item" v-for="link in links" :key="link">
      <a class="textMenu" :href="'#/' + link.to">
        <i :class="link.icon"></i>{{ link.label }}
      </a>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Menu",
  data() {
    return {
      links: [
        {
          label: "Home",
          icon: "pi pi-home iconR",
          to: "Home",
        },
        {
          label: "Vos fichiers",
          icon: "pi pi-file iconR",
          to: "vosfichiers",
        },
        {
          label: "Vos amis",
          icon: "pi pi-users iconR",
          to: "vosamis",
        },
        {
          label: "Vos Favoris",
          icon: "pi pi-heart iconR",
          to: "vosfav",
        },
        {
          label: "Contact",
          icon: "pi pi-send iconR",
          to: "contact",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import '../../../scss/Global.scss';
.menu {
  .item {
    padding: 1.8rem 0.5rem;

    .textMenu {
      font-size: 110%;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;
      justify-content: center;
      cursor: pointer;

      .iconR {
        margin-right: 0.5rem;
        font-size: 200%;
        color: $color-android;
      }

      .iconR:hover{
        color: $color-special;
      }
    }
  }
}
</style>
