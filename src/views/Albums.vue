<!--|== Template =============================================================================== -->
<template>
  <section>
    <PageTitle :text="title" />
    <div class="grid__container">
      <Thumb
        v-if="albums"
        v-for="(album, index) in albums"
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
import PageTitle from '../components/PageTitle.vue';
import Thumb from '../components/Thumb.vue';

export default {
  name: 'albums-page',

  components: {
    PageTitle,
    Thumb
  },

  data() {
    return {
      title: 'Albums'
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

  computed: {
    ...mapState(['albums'])
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
