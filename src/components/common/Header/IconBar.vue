<template>
    <div class="iconBar">
        <div v-for="icon in icons" :key="icon" class="wrapperIcon">
            <Icon v-on:click="greet(isNotification,icon[0],icon[1],icon[2])" :iconType="icon[0]" :link="icon[1]" :settings="icon[2]"/>
        </div>
    </div>
    <div v-if="isNotification" class="notifactionDialogue">
        Mes notifications
    </div>
</template>

<script>
import Icon from './Icon.vue'
export default {
    name: 'IconBar',
    data () {
        return {
            icons: [['Notifications', 'notif'], ['Profile', 'profile'], ['Settings', 'settings'], ['Deconnexion', '']],
            isNotification:false
        }
    },
    components: {
        Icon,
    },
    methods: {
        testProps() {
            console.log(this.$props.link);
        },
        greet(data,type) {
            if(type==="Notifications"){
              this.$data.isNotification = !data  
            }else if(type==="Profile"){
                //window.location.href = '/' + link
                this.$router.push({ name: 'Profil' });
            }
            else if(type==="Settings"){
                this.$router.push({ name: 'Settings' });
            }
            else{
                window.location.href = '/'
            }
            
        }
    },
    mounted: function () {
        this.testProps()
    }
}
</script>

<style lang="scss" scoped>
@import "../../../scss/common.scss";

.iconBar {

    width: 25%;
    margin-right: 0%;
    display: flex;
    align-items: center;
    justify-items: center;
    justify-content: space-around;

}

.notifactionDialogue{
    height: 100px;
    width: 100px;
    background: $color-head;
    position: absolute;
    top: 74px;
    right: 20%;
    border-radius: 10px;
}

</style>