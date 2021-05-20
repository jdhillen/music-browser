// ==|== Imports ===================================================================================
import { createStore } from 'vuex';
import Service from '../services/index.js';

// ==|== Store =====================================================================================
export default createStore({
  // ==|== State ===================================================================================
  state: {
    artists: [],
    artist: [],
    albums: [],
    album: []
  },

  // ==|== Actions =================================================================================
  actions: {
    fetchArtists({ commit }) {
      return Service.getArtists().then((response) => {
        commit('SET_ARTISTS', response.data);
      });
    },

    fetchArtist({ commit }, slug) {
      return Service.getArtist(slug).then((response) => {
        commit('SET_ARTIST', response.data[0]);
      });
    },

    fetchAlbums({ commit }) {
      return Service.getAlbums().then((response) => {
        commit('SET_ALBUMS', response.data);
      });
    },

    fetchAlbum({ commit }, slug) {
      return Service.getAlbum(slug).then((response) => {
        commit('SET_ALBUM', response.data[0]);
      });
    }
  },

  // ==|== Mutations ===============================================================================
  mutations: {
    SET_ARTISTS(state, value) {
      state.artists = value;
    },

    SET_ARTIST(state, value) {
      state.artist = value;
    },

    SET_ALBUMS(state, value) {
      state.albums = value;
    },

    SET_ALBUM(state, value) {
      state.album = value;
    }
  },

  // ==|== Getters =================================================================================
  getters: {}
});
