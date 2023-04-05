<template>
    <div class="container_header justify_between d_flex align_center">
        <h1>TOOCOOLFIX</h1>
        <select name="" id="" v-model="store.chosenGenre" @change="$emit('filtered')">
            <option v-for="(element, index) in store.arrayGenre" :key="index" :value="element.id">{{
                element.name }}</option>
        </select>
        <div>
            <input @keyup.enter="$emit('searchInputBar')" type=" text" placeholder="cerca un film" v-model="store.search">
            <div class="button" @click="$emit('searchInputBar')"><a href=" #">cerca</a>
            </div>
        </div>
    </div>
</template>

<script>
import { store } from '../store.js';
import MyCard from './MyCard.vue';
import MyMain from './MyMain.vue';


export default {
    name: 'MyHeader',
    emits: ['searchInputBar'],


    data() {
        return {
            store
        }
    },
    //     methods: {
    //         filterMovies() {
    //             if (store.arrayApi.genre_ids == value) {
    //                 this.getApi()
    //             }
    //         }
    //     },
    //     computed() {
    //         console.log(this.chosenGenre)
    //     }
}

</script>

<style scoped>
.container_header {
    background-image: url("https://www.shutterstock.com/image-photo/three-cats-dark-glasses-on-260nw-2024364104.jpg");
    background-position: center;
    /* background-color: black; */
    height: 100px;
}

h1 {
    color: red;
}


.button {
    border: 1px solid blue;
    background-color: blue;
    padding: 2px;
    max-width: 50px;
    text-align: center;
}

.button a {
    text-decoration: none;
    color: white;
}
</style>