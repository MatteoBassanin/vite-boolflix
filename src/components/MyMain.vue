<template>
    <div v-if="(store.arrayApi != '') || (store.arrayTvSeries != '')" class="big_container">
        <h1 v-if="store.arrayApi != ''">Film trovati</h1>
        <ul class="d_flex flex_wrap justify_between">
            <MyCard v-for="(card, index) in store.arrayApi" :title="card.title" :title_original="card.original_title"
                :description="card.overview" :language="card.original_language" :rate="card.vote_average"
                :poster="`${store.apiImage}${card.poster_path}`" :key="index">
            </MyCard>
        </ul>
        <h1 v-if="store.arrayTvSeries != ''">Serie Tv trovate</h1>
        <ul class="d_flex flex_wrap justify_between">
            <MyCardTv v-for="(card, index) in store.arrayTvSeries" :title="card.name" :title_original="card.original_name"
                :description="card.overview" :language="card.original_language" :rate="card.vote_average"
                :poster="`${store.apiImage}${card.poster_path}`" :key="index"></MyCardTv>
        </ul>

    </div>
    <div v-else class="no_results">
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

.no_results {
    height: 100vh;
    width: 100vw;
    background-image: url("https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp3390757.jpg&f=1&nofb=1&ipt=af26c301c5b9c31e1c3ba2b249ca6c2aadccb992ad649e2a2bd09ea7cf1c4505&ipo=images");
    ;
}
</style>