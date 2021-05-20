<!--|== Template =============================================================================== -->
<template>
  <section class="artists">
    <div class="row">
      <div class="twelve columns">
        <h1>Artists</h1>
      </div>
    </div>
    <div class="grid__container">
      <Thumb
        v-if="artists"
        v-for="(artist, index) in artists"
        :key="index"
        @click.native="gotoArtist(artist.slug)"
        :img="artist.photo"
        :name="artist.name"
      ></Thumb>
    </div>
  </section>
</template>

<!--|== Scripts ================================================================================ -->
<script>
import { mapState } from 'vuex';
import Thumb from '../components/Thumb.vue';

export default {
  name: 'artists-page',

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
    ...mapState(['artists'])
  },

  methods: {
    gotoArtist(slug) {
      this.$router.push({ path: `/artists/${slug}` });
    }
  },

  watch: {}
};
</script>

<!--|== CSS ==================================================================================== -->
<style lang="scss"></style>
