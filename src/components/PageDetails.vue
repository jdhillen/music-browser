<!--|== Template =============================================================================== -->
<template>
  <div class="row">
    <div class="four columns">
      <img class="img" :src="photo" :alt="name" />
    </div>
    <div class="eight columns">
      <div class="description" v-html="description"></div>
    </div>
  </div>
  <hr />
</template>

<!--|== Scripts ================================================================================ -->
<script>
export default {
  name: 'page-details',

  props: {
    photo: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    description: {
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
.img {
  border: 1px solid $white;
  box-shadow: 0px 2px 5px black(0.5);
  margin-bottom: 2rem;
}

.description {
  line-height: 1.5;
}
</style>
