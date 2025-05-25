import { createRouter, createWebHistory } from 'vue-router';

import Dashboard from '../views/Dashboard.vue';
import ProyekList from '../views/ProyekList.vue';
import ProyekTambah from '../views/ProyekTambah.vue';
import Tim from '../views/Tim.vue';
import Tugas from '../views/Tugas.vue';
import Timeline from '../views/Timeline.vue';
import Anggaran from '../views/Anggaran.vue';
import Klien from '../views/Klien.vue';
import Notifikasi from '../views/Notifikasi.vue';
import Pengaturan from '../views/Pengaturan.vue';

const routes = [
  { path: '/', redirect: '/dashboard' },
  { path: '/dashboard', component: Dashboard },
  { path: '/proyek', component: ProyekList },
  { path: '/proyek/tambah', component: ProyekTambah },
  { path: '/tim', component: Tim },
  { path: '/tugas', component: Tugas },
  { path: '/timeline', component: Timeline },
  { path: '/anggaran', component: Anggaran },
  { path: '/klien', component: Klien },
  { path: '/notifikasi', component: Notifikasi },
  { path: '/pengaturan', component: Pengaturan }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
