<template>
    <div  class="icon">
         <img class="iconImg" :src="getIconPath()">
        <!-- <a :href='"/#/" + link'>
           
        </a> -->
    </div>
</template>

<script>

import Notifications from "../../../assets/header/Notifications.svg"
import deconnexion from "../../../assets/header/deconnexion.svg"
import Profile from "../../../assets/header/Profile.svg"

export default {
    name: 'IconAdmin',
    props: {
        iconType: String, 
        link: String
    },
    data () {
        return {
            icon: [Notifications, Profile, deconnexion]
        }
    },
    methods: {
        getIconPath () {
            console.log(this.$props.iconType,"this.$props.iconType")
            switch (this.$props.iconType) {
                case "Notifications":
                    return this.$data.icon[0]
                case "Profile":
                    return this.$data.icon[1]
                case "deconnexion":
                    return this.$data.icon[2]
                default:
                    return this.data.icon[3]
            }
        },
        greet () {
      // `this` fait référence à l'instance de Vue à l'intérieur de `methods`
      alert('Bonjour ')
      // `event` est l'évènement natif du DOM
    }
    },
}
</script>

<style lang="scss" scoped>
@import "../../../scss/common.scss";

/*.icon {

    display: flex;
    align-content: center;

    .iconImg {
        width: 65%;
        //filter: $filter-head;
        cursor: pointer;
        //transition: filter ease-in-out .05s;
    }*/
    .icon {

    display: flex;

    .iconImg {
        width: 30px;
        filter: $filter-head;
        cursor: pointer;
        transition: filter ease-in-out .05s;

        &:hover {
            filter: $filter-special;
        }
    }
}

</style>