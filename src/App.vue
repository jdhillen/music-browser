<!--|== Template =============================================================================== -->
<template>
  <GitHubCorner />
  <Navigation />
  <router-view class="container" />
</template>

<!--|== Scripts ================================================================================ -->
<script>
import GitHubCorner from './components/GitHubCorner.vue';
import Navigation from './components/Navigation.vue';

export default {
  name: 'app',

  props: {},

  components: {
    GitHubCorner,
    Navigation
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
<style lang="scss"></style>
