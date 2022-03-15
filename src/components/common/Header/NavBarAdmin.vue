import moderateurActive from "../../components/Admin/ListeUsersMain.vue"
<template>
    <nav>
        <div class="menu-item"><router-link to="/listeusers"><b>Utilisateurs</b></router-link></div>
        <div class="menu-item"><router-link to="gestionressources"><b>Ressources</b></router-link></div>
        <div class="menu-item"><router-link to="statistique"><b>Statistiques</b></router-link></div>
    </nav>
</template>

<script>
export default {
    name: 'NavBarAdmin'
}
</script>

<style lang="scss" scoped>
@import "../../../scss/common.scss";
nav{
    display: flex;
    align-items: center;
    margin-right: -50%;
}

nav .menu-item{
    padding: 10px 20px;
    position: relative;
    text-align: center;
    border-bottom: 3px solid transparent;
    display: flex;
    transition: 0.4s;
}

a {
    color: $color-text;
    text-decoration: none;
}

</style>
