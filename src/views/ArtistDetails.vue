<!--|== Template =============================================================================== -->
<template>
  <section class="artist">
    <h1>About {{ artist.name }}</h1>
    <div class="artist__container">
      <div class="artist__img">
        <img :src="artist.photo" :alt="artist.name" />
      </div>

      <div class="artist__bio">{{ artist.bio }}</div>
    </div>

    <h1>Albums</h1>
    <div class="grid__container">
      <Thumb
        v-if="artist.albums"
        v-for="(album, index) in artist.albums"
        :key="index"
        @click.native="gotoAlbum(album.slug)"
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
  name: 'artists-details',

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
    ...mapState(['artist'])
  },

  methods: {
    gotoAlbum(slug) {
      this.$router.push({ path: `/albums/${slug}` });
    }
  },

  watch: {}
};
</script>

<!--|== CSS ==================================================================================== -->
<style lang="scss">
.artist {
  &__container {
    display: flex;
    flex-direction: row;
  }

  &__img {
    flex: none;
    display: block;
    width: 300px;
    height: 300px;
    margin-right: 25px;
    position: relative;
    border: 1px solid $white;
    box-shadow: 0px 2px 5px black(0.5);
  }
}
</style>
