<template>
    <div class="container_header justify_between d_flex align_center">
        <h1>TOOCOOLFIX</h1>
        <div class="select_container">
            <select name="genre" id="genre" v-model="store.chosenGenre" @change="$emit('filtered', 'filteredTv')">
                <option v-for="(element, index) in store.arrayGenre" :key="index" :value="element.id">{{
                    element.name }}</option>
            </select>
            <label for="genre">Cerca il tuo genere preferito</label>

        </div>
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

}

</script>

<style scoped>
.container_header {
    background-image: url("https://www.shutterstock.com/image-photo/three-cats-dark-glasses-on-260nw-2024364104.jpg");
    background-position: center;
    height: 100px;
}

h1 {
    color: red;
}


.button {
    border: 1px solid blue;
    background-color: blue;
    padding: 3px;
    max-width: 50px;
    text-align: center;
    position: relative;
    right: 50px;
    bottom: 26px;
}


input[type="\ text"] {
    padding: 3px;
}

.button a {
    text-decoration: none;
    color: white;
}



select {
    position: relative;
    right: 283px;
    bottom: 15px;
    padding: 3px;
}

label {
    color: red;
    position: relative;
    right: 433px;
    top: 10px;
    font-weight: 900;
}
</style>