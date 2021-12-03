<template>
    <div class="search view">
        <Sidemenu />
        <div class="wrap">
            <Header />
        </div>
    </div>
</template>

<script>
import Sidemenu from "../components/common/Sidemenu/Sidemenu.vue";
import Header from "../components/common/Header/Header.vue";

export default {
    name: "Search",
    components: {
        Header,
        Sidemenu,
    },
};
</script>

<style lang="scss" scoped></style>
