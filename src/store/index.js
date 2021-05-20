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

    fetchArtist({ commit }, id) {
      return Service.getArtist(id).then((response) => {
        commit('SET_ARTIST', response.data);
      });
    },

    fetchAlbums({ commit }) {
      return Service.getAlbums().then((response) => {
        commit('SET_ALBUMS', response.data);
      });
    },

    fetchAlbum({ commit }, id) {
      return Service.getAlbum(id).then((response) => {
        commit('SET_ALBUM', response.data);
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
