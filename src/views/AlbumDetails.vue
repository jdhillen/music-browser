<!--|== Template =============================================================================== -->
<template>
  <section class="album">
    <div class="row">
      <div class="twelve columns">
        <h3 class="album__title">{{ album.name }}</h3>
      </div>
    </div>
    <hr />
    <div class="row">
      <div class="four columns">
        <img class="album__img" :src="album.photo" :alt="album.name" />
      </div>
      <div class="eight columns">
        <div class="album__description">{{ album.description }}</div>
      </div>
    </div>
    <hr />
    <div class="row">
      <div class="twelve columns">
        <h3>Track List</h3>
      </div>
    </div>
    <div class="row">
      <div class="twelve columns">
        <div
          class="album__track"
          v-for="(track, index) in album.tracks"
          :key="index"
        >
          {{ track.track_number }} - {{ track.name }}
        </div>
      </div>
    </div>
  </section>
</template>

<!--|== Scripts ================================================================================ -->
<script>
import { mapState } from 'vuex';

export default {
  name: 'albums-details',

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

  computed: {
    ...mapState(['album'])
  },

  methods: {},

  watch: {}
};
</script>

<!--|== CSS ==================================================================================== -->
<style lang="scss">
.album {
  &__title {
    margin-bottom: 0;
  }

  &__img {
    border: 1px solid $white;
    box-shadow: 0px 2px 5px black(0.5);
    margin-bottom: 2rem;
  }

  &__description {
    line-height: 1.5;
  }

  &__tracks {
  }

  &__track {
  }
}
</style>
