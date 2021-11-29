<template>
    <div class="navLink" @click="print">
        <img class="icon" :src="img" :alt="img"/>
        <p>
            {{ text }}
        </p>
    </div>
</template>

<script>
export default {
    name: 'NavLink',
    props: {
        text: String,
        img: String
    },
    methods: {
        print () {
            console.log(this.$props.text);
            console.log(this.$props.img);
        }
    }
}
</script>

<style lang="scss" scoped>

.navLink {
    display: flex;
    flex-direction: column;
    align-items: center;

    .icon {
        width: 20%;
    }
}

</style>