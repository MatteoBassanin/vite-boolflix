<template>
    <MyCard v-for="(card, index) in store.arrayApi" :title="card.original_title" :key="index"></MyCard>
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