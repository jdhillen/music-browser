<!--|== Template =============================================================================== -->
<template>
  <section class="albums">
    <div class="row">
      <div class="twelve columns">
        <h1>Albums</h1>
      </div>
    </div>
    <div class="albums__container">
      <Thumb
        v-for="(album, index) in albums"
        :key="index"
        @click.native="gotoAlbum(album.id)"
        :img="album.photo"
        :name="album.name"
      ></Thumb>
    </div>
  </section>
</template>

<!--|== Scripts ================================================================================ -->
<script>
import { mapState } from 'vuex';
import Thumb from '../components/Thumb.vue';

export default {
  name: 'albums-page',

  components: {
    Thumb
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

  computed: {
    ...mapState(['albums'])
  },

  methods: {
    gotoAlbum(id) {
      this.$router.push({ path: '/albums/' + id });
    }
  },

  watch: {}
};
</script>

<!--|== CSS ==================================================================================== -->
<style lang="scss">
.albums {
  &__container {
    display: grid;
    grid-gap: 2rem;
    width: 100%;
    max-width: 100%;
    margin: 0 auto 5rem auto;

    /* Larger than mobile */
    @media (min-width: 400px) {
      grid-template-columns: repeat(1, 1fr);
    }

    /* Larger than phablet (also point when grid becomes active) */
    @media (min-width: 550px) {
      grid-template-columns: repeat(1, 1fr);
    }

    /* Larger than tablet */
    @media (min-width: 750px) {
      grid-template-columns: repeat(2, 1fr);
    }

    /* Larger than desktop */
    @media (min-width: 1000px) {
      grid-template-columns: repeat(3, 1fr);
    }

    /* Larger than Desktop HD */
    @media (min-width: 1200px) {
      grid-template-columns: repeat(4, 1fr);
    }
  }
}
</style>
