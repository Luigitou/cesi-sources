<template>
    <div class="icon">
        <img class="iconImg" :src="getIconPath()">
    </div>
</template>

<script>
import Notifications from "../../../assets/header/Notifications.svg"
import Profile from "../../../assets/header/Profile.svg"
import Settings from "../../../assets/header/Settings.svg"
import Deconnexion from "../../../assets/header/deconnexion.svg"
import Undefined from "../../../assets/header/undefined.svg"

export default {
    name: 'Icon',
    props: {
        iconType: String, 
        link: String,
        settings: String
    },
    data () {
        return {
            icon: [Notifications, Profile, Settings, Deconnexion, Undefined]
        }
    },
    methods: {
        getIconPath () {
            switch (this.$props.iconType) {
                case "Notifications":
                    return this.$data.icon[0]
                case "Profile":
                    return this.$data.icon[1]
                case "Settings":
                    return this.$data.icon[2]
                case "Deconnexion":
                    return this.$data.icon[3]
                default:
                    return this.data.icon[4]
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

.icon {

    display: flex;

    .iconImg {
        width: 65%;
        filter: $filter-head;
        cursor: pointer;
        transition: filter ease-in-out .05s;

        &:hover {
            filter: $filter-special;
        }
    }
}

</style>