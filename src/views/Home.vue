<!--|== Template =============================================================================== -->
<template>
  <section>
    <PageTitle :text="title" />
    <div class="row">
      <div class="twelve columns">
        <p>
          Music has always been a huge part of my life. Anytime I learn a new
          technology, I always us music as the content. This app was built with
          Vue 3, Vite and hosted on Netlify. This app will display some of my
          favorite artists and albums. Along with track listings and blurbs
          abbout each artist.
        </p>
        <p>Enjoy,<br />J.D. Hillen</p>
      </div>
    </div>
  </section>
</template>

<!--|== Scripts ================================================================================ -->
<script>
import PageTitle from '../components/PageTitle.vue';

export default {
  name: 'home-page',

  props: {},

  components: {
    PageTitle
  },

  data() {
    return {
      title: 'Welcome To My Music Browser'
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
