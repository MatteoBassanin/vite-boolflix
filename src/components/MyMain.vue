<template>
    <div v-if="(store.arrayApi != '') || (store.arrayTvSeries != '')" class="">
        <h1 v-if="store.arrayApi != ''">Film trovati</h1>
        <ul class="d_flex flex_wrap justify_between">
            <MyCard v-for="(card, index) in store.arrayApi" :title="card.title" :title_original="card.original_title"
                :description="card.overview" :language="card.original_language" :rate="card.vote_average"
                :poster="`${store.apiImage}${card.backdrop_path}`" :key="index"></MyCard>
        </ul>
        <h1 v-if="store.arrayTvSeries != ''">Serie Tv trovate</h1>
        <ul class="d_flex flex_wrap justify_between">
            <MyCardTv v-for="(card, index) in store.arrayTvSeries" :title="card.name" :title_original="card.original_name"
                :description="card.overview" :language="card.original_language" :rate="card.vote_average"
                :poster="`${store.apiImage}${card.backdrop_path}`" :key="index"></MyCardTv>
        </ul>

    </div>
    <div v-else>
        <h1>Nessuna ricerca effetuata</h1>
    </div>
</template>


<script>
import { store } from '../store.js';

import MyCard from './MyCard.vue';
import MyCardTv from './MyCardTv.vue';


export default {
    name: "MyMain",

    components: {
        MyCard,
        MyCardTv
    },


    data() {
        return {
            store,
        }
    },

}
</script>

<style scoped>
h1 {
    color: red;
}
</style>