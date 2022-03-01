<template>
    <div class="icon">
        <a :href='"/#/" + link'>
            <img class="iconImg" :src="getIconPath()">
        </a>
    </div>
</template>

<script>

import Notifications from "../../../assets/header/Notifications.svg"
import deconnexion from "../../../assets/header/deconnexion.svg"

export default {
    name: 'IconAdmin',
    props: {
        iconType: String, 
        link: String
    },
    data () {
        return {
            icon: [Notifications, deconnexion]
        }
    },
    methods: {
        getIconPath () {
            switch (this.$props.iconType) {
                case "Notifications":
                    return this.$data.icon[0]
                default:
                    return this.$data.icon[1]
            }
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