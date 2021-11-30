<template>
    <div class="iconBar">
        <div v-for="icon in icons" :key="icon" class="wrapperIcon">
            <Icon :iconType="icon"/>
        </div>
    </div>
</template>

<script>
import Icon from './Icon.vue'
export default {
    name: 'IconBar',
    data () {
        return {
            icons: ['Notifications', 'Profile', 'Settings']
        }
    },
    components: {
        Icon
    }
}
</script>

<style lang="scss" scoped>

.iconBar {

    width: 25%;
    margin-right: 0%;
    display: flex;
    align-items: center;
    justify-items: center;
    justify-content: space-around;

}

</style>