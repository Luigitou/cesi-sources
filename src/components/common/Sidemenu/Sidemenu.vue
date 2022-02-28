<template>
    <div class="Sidemenu">
        <Logo  id="logo"/>
        <Subnav  />
    </div>
</template>

<script>
import Logo from "./Logo.vue"
import Subnav from "./Subnav.vue"

export default {
    name: 'SideMenu',
    components: {
        Logo,
        Subnav
    }
}
</script>

<style lang="scss" scoped>

@import "../../../scss/common.scss";

.Sidemenu {
    display: flex;
    flex-direction: column;
    position: relative;
    background: $color-head;
    width: 10%;
    height: 100%;
}

@media only screen and (max-width: 600px) {
  .Sidemenu {
    display: flex;
    flex-direction: column;
    position: relative;
    background: $color-head;
    width: 10%;
    height: 100%;
  }
}
</style>