<!--|== Template =============================================================================== -->
<template>
  <section>
    <PageTitle :text="artist.name" />
    <PageDetails
      :photo="artist.photo"
      :name="artist.name"
      :description="artist.bio"
    />
    <div class="row">
      <div class="twelve columns">
        <h4>Albums</h4>
      </div>
      <div class="twelve columns">
        <div class="grid__container">
          <Thumb
            v-if="artist.albums"
            v-for="(album, index) in artist.albums"
            :key="index"
            @click.native="gotoAlbum(album.slug)"
            :img="album.photo"
            :name="album.name"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<!--|== Scripts ================================================================================ -->
<script>
import { mapState } from 'vuex';
import PageTitle from '../components/PageTitle.vue';
import PageDetails from '../components/PageDetails.vue';
import Thumb from '../components/Thumb.vue';

export default {
  name: 'artists-details',

  components: {
    PageTitle,
    PageDetails,
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
<style lang="scss"></style>
