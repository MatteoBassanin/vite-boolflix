<template>
    <ul>
        <MyCard v-for="(card, index) in store.arrayApi" :title="card.title" :title_original="card.original_title"
            :description="card.overview" :language="card.original_language" :rate="card.vote_average"
            :poster="`${store.apiImage}${card.backdrop_path}`" :key="index"></MyCard>
    </ul>
    <ul>
        <MyCardTv v-for="(card, index) in store.arrayTvSeries" :title="card.name" :title_original="card.original_name"
            :description="card.overview" :language="card.original_language" :rate="card.vote_average"
            :poster="`${store.apiImage}${card.backdrop_path}`" :key="index"></MyCardTv>
    </ul>
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

<style scoped></style>