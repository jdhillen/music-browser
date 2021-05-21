<!--|== Template =============================================================================== -->
<template>
  <section>
    <PageTitle :text="album.name" />
    <PageDetails
      :photo="album.photo"
      :name="album.name"
      :description="album.description"
    />
    <div class="row">
      <div class="twelve columns">
        <h4>Track List</h4>
      </div>
      <div class="twelve columns bottom">
        <div v-for="(track, index) in album.tracks" :key="index">
          {{ track.track_number }} - {{ track.name }}
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

export default {
  name: 'albums-details',

  components: {
    PageTitle,
    PageDetails
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
    ...mapState(['album'])
  },

  methods: {},

  watch: {}
};
</script>

<!--|== CSS ==================================================================================== -->
<style lang="scss"></style>
