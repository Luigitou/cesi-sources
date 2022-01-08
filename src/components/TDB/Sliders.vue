<template>
    <div class="Sliders">
        <p>{{ Text }}</p>
        <div class="setImageWrap">
            <div class="wrapperImages" v-for="images in Img" :key="images">
                <Images v-bind:Text="images['Text']" />
            </div>
        </div>
        <div class="dotWrap">
          <span class="dot" onclick="currentSlide(1)"></span>
          <span class="dot" onclick="currentSlide(2)"></span>
          <span class="dot" onclick="currentSlide(3)"></span>
        </div>
    </div>
</template>

<script>
import Images from "./Images.vue";

export default {
    name: "Sliders",
    components: {
        Images,
    },
    props: {
        Text: String,
        Img: String,
    },
};
</script>

<style lang="scss" scoped>
.Sliders {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    .setImageWrap {
        display: flex;
        flex-direction: row;

        .wrapperImages {
            display: flex;
            flex-direction: row;
        }
    }

    .dotWrap {
        display: flex;
        flex-direction: row;

        .dot {
            display: block;
            width: 10px;
            height: 10px;
            background: blue;
        }
    }
}
</style>
