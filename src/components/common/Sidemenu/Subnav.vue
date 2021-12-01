<template>
    <div class="subnav">
        <div class="wrapper" v-for="element in listLink" :key="element">
            <NavLink :text="element['text']" :img="element['image']" :link="element['link']"/>
        </div>
    </div>
</template>

<script>
import NavLink from "./NavLink.vue"

import home from "../../../assets/Sidemenu/home.svg"
import file from "../../../assets/Sidemenu/double-file.svg"
import fav from "../../../assets/Sidemenu/people.svg"
import hearth from "../../../assets/Sidemenu/hearth.svg"
import contact from "../../../assets/Sidemenu/card.svg"


export default {
    name: 'Subnav',
    components: {
        NavLink
    },
    data () {
        return {
            listLink: [
                {
                    text: 'Accueil',
                    image: home,
                    link: 'tdb'
                },
                {
                    text: 'Vos fichiers',
                    image: file,
                    link: 'vosfichiers'
                },
                {
                    text: 'Vos groupes',
                    image: fav,
                    link: 'groups'
                },
                {
                    text: 'Vos favoris',
                    image: hearth,
                    links: 'fav'
                },
                {
                    text: 'Contacts',
                    image: contact,
                    link: 'contact'
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>

@import "../../../scss/common.scss";

.subnav {
    background: $color-head;
    height: 75%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
}

</style>