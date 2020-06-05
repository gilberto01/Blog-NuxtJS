<template>
<div>
  <b-navbar toggleable="lg" type="dark" variant="info" fixed="top">
    <b-navbar-brand :to="{ path: '/' }">Menu Principal</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#" :to="{ path: '/' }">Inicio</b-nav-item>
        <b-nav-item href="#" :to="{ path: '/blog?page=1' }">Blog</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>
<style scoped>
    .navbar{
        z-index: 999;
    }
</style>