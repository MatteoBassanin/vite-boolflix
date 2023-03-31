<template>
    <MyCard v-for="(card, index) in store.arrayApi" :title="card.title" :title_original="card.original_title"
        :language="card.original_language" :rate="card.vote_average" :key="index"></MyCard>
</template>


<script>
import { store } from '../store.js';
import MyCard from './MyCard.vue';


export default {
    name: "MyMain",

    components: {
        MyCard,
    },


    data() {
        return {
            store,
        }
    }
}
</script>

<style scoped></style>