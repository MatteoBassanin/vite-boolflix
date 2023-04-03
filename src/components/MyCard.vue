<template>
    <li>
        <div class="flip_card_wrapper">

            <div class="card_wrapper_movies">
                <div class="card_front">
                    <img class="movie_img" :src="poster" alt="">
                </div>
                <div class="card_back">
                    <h1>{{ title }}</h1>
                    <h2>{{ title_original }}</h2>
                    <!-- <img class="movie_img" :src="poster" alt=""> -->
                    <img class="language_img" v-if="(language == 'it')"
                        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.vexels.com%2Fmedia%2Fusers%2F3%2F164330%2Fisolated%2Fpreview%2F66d81ab725414fff42aeefdf5fc79aa8-italy-flag-language-icon-by-vexels.png&f=1&nofb=1&ipt=b47237050c7e15801ac26188cbf154042c70671ecfcea723caa8842ba1c3d840&ipo=images"
                        alt="">
                    <img class="language_img" v-else-if="(language == 'en')"
                        src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.adesivi4x4.it%2F425-large_default%2Fbandiera-inglese.jpg&f=1&nofb=1&ipt=d104e14ecefe73b31341418a0fee7807a79cfb160498a94037f42ed7db273d47&ipo=images"
                        alt="">
                    <h3 v-else>{{ language }}</h3>
                    <h4><i v-for="index in Math.ceil(rate / 2)" class="fa-solid fa-star"></i> <i
                            v-for="index in 5 - (Math.ceil(rate / 2))" class="fa-regular fa-star"></i>
                    </h4>
                    <p>{{ description }}</p>
                </div>
            </div>
        </div>
    </li>
    <!-- <h1>{{ title }}</h1>
        <h2>{{ title_original }}</h2>
        <img class="movie_img" :src="poster" alt="">
        <img class="language_img" v-if="(language == 'it')"
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.vexels.com%2Fmedia%2Fusers%2F3%2F164330%2Fisolated%2Fpreview%2F66d81ab725414fff42aeefdf5fc79aa8-italy-flag-language-icon-by-vexels.png&f=1&nofb=1&ipt=b47237050c7e15801ac26188cbf154042c70671ecfcea723caa8842ba1c3d840&ipo=images"
            alt="">
        <img class="language_img" v-else-if="(language == 'en')"
            src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.adesivi4x4.it%2F425-large_default%2Fbandiera-inglese.jpg&f=1&nofb=1&ipt=d104e14ecefe73b31341418a0fee7807a79cfb160498a94037f42ed7db273d47&ipo=images"
            alt="">
        <h3 v-else>{{ language }}</h3>
        <h4><i v-for="index in Math.ceil(rate / 2)" class="fa-solid fa-star"></i> <i
                v-for="index in 5 - (Math.ceil(rate / 2))" class="fa-regular fa-star"></i>
        </h4> -->
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
        description: String
    },

    Data() {
        return {
            store,
        }
    },
    methods: {

    },


}
</script>


<style scoped>
.language_img {
    width: 50px;
}

.movie_img {
    width: 500px;
    height: 300px;

}

.card_wrapper_movies {

    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.6s;
    transform-style: preserve-3d;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

.card_front {
    background-color: #bbb;
    color: black;
}

.card_back {
    background-color: black;
    color: white;
    transform: rotateY(180deg);
}

.card_front,
.card_back {
    border: 1px solid black;
    /* width: 342px;
    height: 192px; */
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
}

.flip_card_wrapper {
    background-color: transparent;
    width: 500px;
    height: 300px;
    perspective: 1000px;
}

.flip_card_wrapper:hover .card_wrapper_movies {
    transform: rotateY(180deg);
}
</style>