<!--|== Template =============================================================================== -->
<template>
  <Navigation />
  <router-view class="container" />
</template>

<!--|== Scripts ================================================================================ -->
<script>
import Navigation from './components/Navigation.vue';

export default {
  name: 'app',

  props: {},

  components: {
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
