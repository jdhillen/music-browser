<!--|== Template =============================================================================== -->
<template>
  <div class="navigation">
    <router-link :to="{ name: 'Home' }">Home</router-link>
    <router-link :to="{ name: 'About' }">About</router-link>
    <router-link :to="{ name: 'Artists' }">Artists</router-link>
    <router-link :to="{ name: 'Albums' }">Albums</router-link>
  </div>
</template>

<!--|== Scripts ================================================================================ -->
<script>
export default {
  name: 'navigation',

  components: {},

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
.navigation {
  width: 100%;
  padding: 2rem;
  text-align: center;
  background-color: black(0.8);
  margin-bottom: 5rem;

  a {
    font-weight: bold;
    color: white(0.5);
    padding: 0 2rem;

    &.router-link-active {
      color: $white;
    }
  }
}
</style>
