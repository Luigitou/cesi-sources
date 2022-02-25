<template>
    <div class="iconBar">
        <div v-for="icon in icons" :key="icon" class="wrapperIcon">
            <Icon :iconType="icon[0]" :link="icon[1]"/>
        </div>
    </div>
</template>

<script>
import Icon from './IconAdmin.vue'
export default {
    name: 'IconBarAdmin',
    data () {
        return {
            icons: [['Notifications', 'notif'], ['deconnexion', '']]
        }
    },
    components: {
        Icon
    },
    methods: {
        testProps() {
            console.log(this.$props.link);
        }
    },
    mounted: function () {
        this.testProps()
    }
}
</script>

<style lang="scss" scoped>

.iconBar {

    width: 25%;
    margin-left: 65%;
    display: flex;
    align-items: center;
    justify-items: center;
    justify-content: space-around;

}

</style>