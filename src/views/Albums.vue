<!--|== Template =============================================================================== -->
<template>
  <section class="page albums">
    <h1>Albums</h1>

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
    ...mapState({
      albums: (state) => state.api.albums
    })
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
    margin: 0 auto;
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

  &__item {
    position: relative;
    border: 1px solid $white;
    box-shadow: 0px 1px 5px black(0.75);
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
      rgba(255, 255, 255, 0) 80%
    );
  }
}
</style>
