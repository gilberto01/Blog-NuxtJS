<template>
  <div>
    <div class="container mt-5 pt-5">
      <b-overlay :show="show" no-wrap></b-overlay>
      <b-row v-bind:class="{'overflow-hidden': show }">
        <b-col
          class="mb-4"
          cols="12"
          md="6"
          lg="4"
          v-for="(items, index) in blogs"
          :key="index"
        >
          <b-card no-body class="mb-3">
            <a :href="items.url" target="_blank">
              <b-card-img
                :src="items.urlToImage || require('~/assets/default-img.gif')"
                img-top
                class="Top-rounded"
              ></b-card-img>
              <h4 class="p-3">{{ limiteLetras(items.title, 42) }}</h4>
            </a>
            <hr />
            <b-card-body class="py-0 Bottom-rounded">
              <b-card-text>
                {{ limiteLetras(items.description, 200) }}
              </b-card-text>
            </b-card-body>
            <template v-slot:footer>
              <small class="text-muted">
                <Autor :info_autor="autores[index]" :id="index" />
              </small>
            </template>
          </b-card>
        </b-col>
      </b-row>

      <div class="mb-5 pagination justify-content-center" v-if="show === false">
        <VuePagination :total="10" :eachSide="5" v-model="page" />
      </div>
    </div>
  </div>
</template>

<script>
import Autor from "~/components/Autor.vue";
import VuePagination from "vue-bs-pagination";
import axios from "axios";

export default {
  components: {
    Autor,
    VuePagination
  },
  head:{
    title: 'Blog y noticias interesantes',
    meta: [
      { hid: 'description', name: 'description', content: 'Blog' }
    ]
  },
  data() {
    return {
      show: true,
      page: 1,
      blogs: null,
      autores: [],
      total_paginas: 1
    };
  },
  watch: {
    page: function(val) {
      if (val) {
        this.clickCallback(val);
      }
    },
    $route(to, from) {
        if(to.fullPath === '/blog?page=1'){
            this.page = 1;
            this.clickCallback(1);
        }
    }
  },
  created() {
    this.CargarDatos();
  },
  methods: {
    clickCallback(pageNum) {
      this.$router.push({ name: "blog", query: { page: pageNum } });
      this.show = true;
      this.blogs = null;

      let _this = this;
      setTimeout(function() {
        _this.CargarDatos();
      }, 500);
    },
    async CargarDatos() {
      let tipo = this.$route.query;
      let base = "https://newsapi.org/v2/everything?";

      if (tipo.page > 1) {
        base = base + "page=" + tipo.page;
      } else {
        base = base + "page=1";
      }

      base =
        base +
        "&pageSize=10&sortBy=relevancy&domains=techcrunch.com,thenextweb.com&apiKey=ffc0f3fb0aa74ed7805c6d6ac08dc72d";

      try {
        const resp = await axios.get(base);
        this.blogs = resp.data.articles;
        this.total_paginas = resp.data.totalResults;
        const autores = await axios.get(
          "https://randomuser.me/api/?results=" + this.blogs.length
        );
        this.autores = autores.data.results;

        this.show = false;
      } catch (error) {
        console.log(error);
      }
    }
  },
  mounted() {
      
  }
};
</script>

<style scoped>
.card img {
  width: 100%;
  height: 200px;
  border: 1px solid rgba(0, 0, 0, 0.125);
}
h4 {
  height: 60px;
}
.card-text {
  height: 150px;
}
</style>
