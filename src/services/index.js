// ==|== Imports ===================================================================================
import axios from 'axios';

// ==|== Axios Client ==============================================================================
const apiClient = axios.create({
  baseURL: `https://hillen-music-demo.herokuapp.com/api/`,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});

// ==|== Export ====================================================================================
export default {
  getArtists() {
    return apiClient.get('artists/');
  },

  getArtist(slug) {
    return apiClient.get('artists/?slug=' + slug);
  },

  getAlbums() {
    return apiClient.get('albums/');
  },

  getAlbum(slug) {
    return apiClient.get('albums/?slug=' + slug);
  }
};
