<template>
    <div class="Filters">
        <div class="wrapTitle" @click="this.$data.displayFilters = !this.$data.displayFilters">
            <img src="../../assets/Search/filters.svg" class="icon" />
            <h2>Filtres</h2>
        </div>
        <div class="wrapSub" v-if="displayFilters">
            <div class="wrapInput">
                <input type="checkbox" value="image" name="typeImage"/>
                <label for="typeImage">Images</label>
            </div>
            <div class="wrapInput">
                <input type="checkbox" value="video" name="typeFolder"/>
                <label for="typeDossier">Dossier</label>
            </div>
            <div class="wrapInput">
                <input type="checkbox" value="pdf" name="typePdf"/>
                <label for="typePdf">PDF</label>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Filters",
    data () {
        return {
            displayFilters: false
        }
    }
};
</script>

<style lang="scss" scoped>
@import "../../scss/common.scss";

.Filters {
    width: 60%;
    height: 100%;
    display: flex;
    color: $color-text;
    flex-direction: column;

    .wrapTitle {
        display: flex;
        height: 50%;
        width: 100%;
        justify-content: center;

        .icon {
            filter: $filter-head;
            margin-right: 10px;
            width: 5%;
        }
    }

    .wrapSub {
        display: flex;
        height: 50%;
        justify-content: center;
        gap: 10%;
        align-items: center;

        .wrapInput {
            display: flex;
            align-items: center;

            input {
                margin-right: 5px;
            }
        }
    }
}
</style>
