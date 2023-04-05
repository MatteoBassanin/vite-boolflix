<template>
  <MyHeader @searchInputBar="getApi" @filtered="filteredMovie"></MyHeader>
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

      this.getMovies(),
        this.getTvSeries(),
        store.search = ""

    },

    getMovies() {
      let apiList = 'https://api.themoviedb.org./3/search/movie?api_key=176dfdb4437f9eac94dba4e2cbb2ef2d&query='


      if (store.search.length > 0) {
        apiList += `${store.search}&language=it-IT`;
      }


      axios.get(apiList)
        .then(response => {
          this.store.arrayApi = response.data.results,
            console.log(store.arrayApi)
        })
    },

    getTvSeries() {
      let apiListTv = 'https://api.themoviedb.org./3/search/tv?api_key=176dfdb4437f9eac94dba4e2cbb2ef2d&query='

      if (store.search.length > 0) {
        apiListTv += `${store.search}&language=it-IT`;
      }

      axios.get(apiListTv)
        .then(response => {
          this.store.arrayTvSeries = response.data.results,
            console.log(store.arrayTvSeries)
        })
    },

    getGenre() {
      let apiGenre = 'https://api.themoviedb.org./3/genre/movie/list?api_key=176dfdb4437f9eac94dba4e2cbb2ef2d&query=&language=it-IT'

      axios.get(apiGenre)
        .then(response => {
          this.store.arrayGenre = response.data.genres
            ,
            console.log(response)
        })

    },

    filteredMovie() {



      // let filteredMovie = `https://api.themoviedb.org/3/discover/movie?api_key=176dfdb4437f9eac94dba4e2cbb2ef2d&language=it_IT&genre_ids=${store.chosenGenre}&query=${store.chosenGenre}`
      let filteredMovie = `https://api.themoviedb.org/4/list/143355?api_key=176dfdb4437f9eac94dba4e2cbb2ef2d&with_genres=${store.chosenGenre}`

      axios.get(filteredMovie)
        .then(response => {
          this.store.arrayApi = response.data.results,
            console.log(store.arrayApi)
        })
    }


  },


  created() {

    this.getApi(),
      this.getGenre()

  }
}
</script>


<style></style>