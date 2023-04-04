<template>
    <li>
        <div class="flip_card_wrapper">
            <div class="card_wrapper_Tv_series">
                <div class="card_front">
                    <img class="movie_img" :src="poster" alt="" @error="setAltImg">
                </div>
                <div class="card_back">
                    <h1>{{ title }}</h1>
                    <h2>{{ title_original }}</h2>
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
            <h1>{{ title }}</h1>
        </div>
    </li>
</template>


<script>
import { store } from '../store';

export default {
    name: "MyCardtv",
    props: {
        title: String,
        title_original: String,
        language: String,
        rate: Number,
        poster: String,
        description: String,
    },
    data() {
        return {
            store
        }
    },
    methods: {
        setAltImg(event) {
            event.target.src = "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimg.izismile.com%2Fimg%2Fimg4%2F20111220%2F640%2Ferrors_by_cats_640_01.jpg&f=1&nofb=1&ipt=c7fe026bc458b7cc6e5e3a9351df2459dc2eed4ff271300351666798e8fe9448&ipo=images"
        }
    }
}
</script>

<style scoped></style>