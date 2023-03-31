<template>
    <div class="card_wrapper">
        <h1>{{ title }}</h1>
        <h2>{{ title_original }}</h2>
        <h3>{{ language }}</h3>
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
    },

    Data() {
        return {
            store
        }
    }
}
</script>


<style scoped></style>