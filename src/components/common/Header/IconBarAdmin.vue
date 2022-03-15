<template>
    <div  class="iconBar">
        <div  v-for="icon in icons" :key="icon" class="wrapperIcon">
            <Icon v-on:click="greet(isNotification,icon[0])" :iconType="icon[0]" :link="icon[1]"/>
        </div>
    </div>
    <div v-if="isNotification" class="notifactionDialogue">
        imennnn
    </div>
</template>

<script>
import Icon from './IconAdmin.vue'
export default {
    name: 'IconBarAdmin',
    data () {
        return {
            icons: [['Notifications', 'notif'], ['deconnexion', '']],
            isNotification:false
        }
    },
    components: {
        Icon
    },
    methods: {
        testProps() {
            console.log(this.$props.link);
        },
        greet(data,type) {
            if(type==="Notifications"){
              this.$data.isNotification = !data  
            /*}else if(type==="Profile"){
                window.location.href = '/' + link
            }*/
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
    margin-left: 65%;
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
    right: 13%;
    border-radius: 10px;
}

</style>