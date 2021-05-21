<!--|== Template =============================================================================== -->
<template>
  <div class="thumb__item">
    <div class="thumb__img">
      <img :src="img" :alt="name" />
    </div>
    <div class="thumb__name">{{ name }}</div>
  </div>
</template>

<!--|== Scripts ================================================================================ -->
<script>
export default {
  name: 'thumb',

  components: {},

  props: {
    img: String,
    name: String
  },

  data() {
    return {};
  },

  beforeCreate() {},

  created() {},

  beforeMount() {},

  mounted() {},

  beforeUpdate() {},

  updated() {},

  beforeUnmount() {},

  unmounted() {},

  computed: {},

  methods: {},

  watch: {}
};
</script>

<!--|== CSS ==================================================================================== -->
<style lang="scss">
.thumb {
  &__item {
    position: relative;
    background-color: $black;
    border: 1px solid $white;
    box-shadow: 0px 2px 5px black(0.5);
    cursor: pointer;
  }

  &__img {
    width: 100%;
  }

  &__name {
    position: absolute;
    font-size: 20px;
    padding: 15px 0;
    bottom: 0;
    left: 0;
    width: 100%;
    text-align: center;
    color: $white;
    text-shadow: 0px 2px $black;
    background: rgb(0, 0, 0);
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 1) 0%,
      rgba(255, 255, 255, 0) 100%
    );
  }
}
</style>
