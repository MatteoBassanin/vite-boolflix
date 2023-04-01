<template>
    <div class="container_header justify_between d_flex align_center">
        <h1>BOOLFIX</h1>
        <div>
            <input type="text" placeholder="cerca un film" v-model="store.search">
            <div class="button" @click="$emit('searchInputBar')"><a href=" #">cerca</a>
            </div>
        </div>
    </div>
</template>

<script>
import { store } from '../store.js';


export default {
    name: 'MyHeader',



    data() {
        return {
            store
        }
    },
}

</script>

<style scoped>
.container_header {
    background-color: black;
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