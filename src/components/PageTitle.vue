<!--|== Template =============================================================================== -->
<template>
  <div class="row">
    <div class="twelve columns">
      <h3 class="title">{{ text }}</h3>
    </div>
  </div>
  <hr />
</template>

<!--|== Scripts ================================================================================ -->
<script>
export default {
  name: 'page-title',

  props: {
    text: {
      type: String,
      required: true
    }
  },

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
<style lang="scss" scopped>
.title {
  margin-bottom: 0;
}
</style>
