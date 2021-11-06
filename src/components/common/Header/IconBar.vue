<template>
    <div>
        <Icon />
    </div>
</template>

<script>
import Icon from './Icon.vue'
export default {
    name: 'IconBar',
    data () {
        return {
            icons: ['Settings', 'Notifications', 'Profile']
        }
    },
    components: {
        Icon
    }
}
</script>

<style lang="scss" scoped>

div {

    width: 20%;
    margin-right: 1%;

}

</style>