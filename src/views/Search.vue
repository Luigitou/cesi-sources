<template>
    <div class="search view">
        <Sidemenu />
        <div class="wrap">
            <Header />
            <SearchMain />
        </div>
    </div>
</template>

<script>
import SearchMain from "../components/Search/SearchMain.vue";
import Sidemenu from "../components/common/Sidemenu/Sidemenu.vue";
import Header from "../components/common/Header/Header.vue";

export default {
    name: "Search",
    components: {
        Header,
        Sidemenu,
        SearchMain,
    },
};
</script>

<style lang="scss" scoped>
</style>
