<!--|== Template =============================================================================== -->
<template>
  <section>
    <PageTitle :text="title" />
    <div class="row">
      <div class="twelve columns">
        <p>Looks like something went wrong that wasn't planned.</p>
        <router-link class="button" :to="{ name: 'Home' }"
          >Back to the home page</router-link
        >
      </div>
    </div>
  </section>
</template>

<!--|== Scripts ================================================================================ -->
<script>
import PageTitle from '../components/PageTitle.vue';

export default {
  name: 'page-not-found-page',

  props: {},

  components: {
    PageTitle
  },

  data() {
    return {
      title: '404'
    };
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
<style lang="scss" scoped></style>
