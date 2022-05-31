<template>
    <div class="midHome">
        <Carousel :value="vosFavoris" :numVisible="3" :numScroll="1">
        </Carousel>
    </div>
</template>

<script>
import Carousel from 'primevue/carousel';

export default {
    name: "MidHome",
    components: {
        Carousel,
    },

    data() {
        return {
            products: null,
            responsiveOptions: [
                {
                    breakpoint: '1024px',
                    numVisible: 3,
                    numScroll: 3
                },
                {
                    breakpoint: '600px',
                    numVisible: 2,
                    numScroll: 2
                },
                {
                    breakpoint: '480px',
                    numVisible: 1,
                    numScroll: 1
                }
            ]
        }
    },
};
</script>

<style lang="scss" scoped>
.product-item {
    .product-item-content {
        border: 1px solid var(--surface-border);
        border-radius: 3px;
        margin: .3rem;
        text-align: center;
        padding: 2rem 0;
        background-color: pink;
    }
}
</style>
