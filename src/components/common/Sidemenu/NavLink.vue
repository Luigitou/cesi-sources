<template>
    <div class="navLink" :class="isHighlight() ? 'active' : ''">
        <a :href="'/#/' + link">
            <img class="icon" :src="img" :alt="img"/>
            <span id="text">{{ text }}</span>
        </a>
    </div>
</template>

<script>
export default {
    name: 'NavLink',
    props: {
        text: String,
        img: String,
        link: String
    },
    methods: {
        isHighlight () {
            if(this.$route.path === ("/" + this.$props.link)) {
                return true;
            } else {
                return false;
            }
        }
    }
}
</script>

<style lang="scss" scoped>

@import "../../../scss/common.scss";

.navLink {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    width: 100%;

    .icon {
        width: 50%;
        filter: $filter-head;
    }

    a {
        text-decoration: none;
        display: flex;
        flex-direction: column;
        align-items: center;
        color: $color-text;

        img {
            margin-bottom: 5%;
        }

        &::after {
            content: '';
            position: absolute;
            bottom: -3px;
            height: 2px;
            width: 100%;
            background: $color-special;
            transform-origin: 0 0.5;
            transform: scaleX(0);
            transition: ease-in-out 0.2s;
        }

        &:hover::after {
            content: '';
            position: absolute;
            bottom: -3px;
            height: 2px;
            background: $color-special;
            transform-origin: 0 0.5;
            transform: scaleX(1);
            transition: ease-in-out 0.2s;
        }
    }

    &.active {

        .icon {
            filter: $filter-special;
        }

        a {
            color: $color-special;
        }

    }
}

@media only screen and (max-width: 600px) {
  .navLink {
    #text{
      display: none;
    }
  }
}

</style>