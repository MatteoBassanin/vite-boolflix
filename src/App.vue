<template>
  <MyHeader @searchInputBar="getApi"></MyHeader>
  <MyMain></MyMain>
  <div></div>
</template>

<script>
import axios from 'axios';
import { store } from './store.js';


import MyHeader from './components/MyHeader.vue';
import MyMain from './components/MyMain.vue';

export default {
  components: {
    MyHeader,
    MyMain,
  },

  data() {
    return {
      store
    }
  },
  methods: {

    getApi() {
      let apiList = 'https://api.themoviedb.org./3/search/movie?api_key=176dfdb4437f9eac94dba4e2cbb2ef2d&query='
      if (store.search.length > 0) {
        apiList += `${store.search}`;
      }

      axios.get(apiList)
        .then(response => {
          this.store.arrayApi = response.data.results,
            console.log(this.arrayApi)
        })
    }

  },


  created() {
    this.getApi()
  }
}
</script>


<style></style>