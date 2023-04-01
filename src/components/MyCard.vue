<template>
    <div class="card_wrapper_movies">
        <h1>{{ title }}</h1>
        <h2>{{ title_original }}</h2>
        <img class="movie_img" :src="poster" alt="">
        <img class="language_img" v-if="(language == 'it')"
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.vexels.com%2Fmedia%2Fusers%2F3%2F164330%2Fisolated%2Fpreview%2F66d81ab725414fff42aeefdf5fc79aa8-italy-flag-language-icon-by-vexels.png&f=1&nofb=1&ipt=b47237050c7e15801ac26188cbf154042c70671ecfcea723caa8842ba1c3d840&ipo=images"
            alt="">
        <img class="language_img" v-else-if="(language == 'en')"
            src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.adesivi4x4.it%2F425-large_default%2Fbandiera-inglese.jpg&f=1&nofb=1&ipt=d104e14ecefe73b31341418a0fee7807a79cfb160498a94037f42ed7db273d47&ipo=images"
            alt="">
        <h3 v-else>{{ language }}</h3>
        <h4>{{ rate }}</h4>
    </div>
</template>

<script>
import { store } from '../store.js';


export default {
    name: "MyCard",
    props: {
        title: String,
        title_original: String,
        language: String,
        rate: String,
        poster: String,
    },

    Data() {
        return {
            store
        }
    }
}
</script>


<style scoped>
.language_img {
    width: 50px;
}
</style>