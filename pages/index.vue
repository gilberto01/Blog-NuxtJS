<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">
        Prueba
      </h1>
      <h2 class="subtitle">
        Blog/Noticiero hecho con Nuxt.JS
      </h2>
      <div class="links">
        <b-button variant="outline-primary" to="/blog">Ir al blog</b-button>
        <br>
        <br>
        <a href="https://nuxtjs.org/" target="_blank">Saber más de Nuxt.JS</a>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  head:{
    title: 'Página de inicio',
    meta: [
      { hid: 'description', name: 'description', content: 'Blog creado con api de noticas y autores' }
    ]
  }
}
</script>

<style scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

.btn-outline-primary {
    color: #17a2b8 !important;
    border-color: #17a2b8 !important;
}

.btn-outline-primary:hover {
    color: white !important;
    background: #17a2b8 !important;
}

</style>
