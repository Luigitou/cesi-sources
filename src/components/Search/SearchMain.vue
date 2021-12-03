<template>
    <div class="SearchMain">
        <div class="wrapFilters">
            <div class="wrapTitle">
                <h2>Résultats de la recherche:</h2>
            </div>
            <Filters />
        </div>
    </div>
</template>

<script>
import Filters from './Filters.vue'
export default {
    components: {
         Filters 
    },
    name: "SearchMain"
}
</script>

<style lang="scss" scoped>
@import "../../scss/common.scss";

.SearchMain {

    padding: 2%;
    height: 100%;
    color: $color-text;

    .wrapFilters {

        display: flex;
        justify-content: space-between;
        height: 15%;

        .wrapTitle {

            height: 50%;
            width: 40%;
            margin: 0;
            display: flex;
            justify-content: center;
            align-items: center;

            h2 {

                margin: auto;
                justify-self: center;
            }

        }

    }

}

</style>