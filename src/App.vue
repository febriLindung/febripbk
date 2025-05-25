<template>
  <div class="app-container">
    <aside class="sidebar">
    <h2>🔧 Sistem Informasi Proyek</h2>
    <nav>
      <router-link to="/dashboard">Dashboard</router-link> |
      <router-link to="/proyek">Proyek</router-link> |
      <router-link to="/proyek/tambah">Tambah Proyek</router-link> |
      <router-link to="/tim">Tim</router-link> |
      <router-link to="/tugas">Tugas</router-link> |
      <router-link to="/timeline">Timeline</router-link> |
      <router-link to="/anggaran">Anggaran</router-link> |
      <router-link to="/klien">Klien</router-link> |
      <router-link to="/notifikasi">Notifikasi</router-link> |
      <router-link to="/pengaturan">Pengaturan</router-link>
      
    </nav>
    </aside>
    <main class="main-content">
      <router-view></router-view>
    </main>
    <hr />
  </div>
</template>
