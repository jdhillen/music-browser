// ==|== Imports ===================================================================================
import { createRouter, createWebHistory } from 'vue-router';
import store from '../store/index.js';
import NProgress from 'nprogress';

// ==|== Routes ====================================================================================
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/artists',
    name: 'Artists',
    component: () => import('../views/Artists.vue'),
    async beforeEnter(to, from, next) {
      await store.dispatch('fetchArtists').then(() => {
        next();
      });
    }
  },
  {
    path: '/artists/:slug',
    name: 'ArtistDetails',
    props: true,
    component: () => import('../views/ArtistDetails.vue'),
    async beforeEnter(to, from, next) {
      await store.dispatch('fetchArtist', to.params.slug).then((artist) => {
        to.params.artist = artist;
        next();
      });
    }
  },
  {
    path: '/albums',
    name: 'Albums',
    component: () => import('../views/Albums.vue'),
    async beforeEnter(to, from, next) {
      await store.dispatch('fetchAlbums').then(() => {
        next();
      });
    }
  },
  {
    path: '/albums/:slug',
    name: 'AlbumDetails',
    component: () => import('../views/AlbumDetails.vue'),
    async beforeEnter(to, from, next) {
      await store.dispatch('fetchAlbum', to.params.slug).then((album) => {
        to.params.album = album;
        next();
      });
    }
  },
  {
    path: '/:catchAll(.*)',
    component: () => import('../views/PageNotFound.vue')
  }
];

// ==|== Router ====================================================================================
const router = createRouter({
  history: createWebHistory(),
  routes
});

// ==|== Route Guards ==============================================================================
router.beforeEach((to, from) => {
  NProgress.start();
});

router.afterEach((to, from) => {
  NProgress.done();
});

// ==|== Export ====================================================================================
export default router;
