<template>
    <h1>{{ title }}</h1>
</template>

<script>
import { store } from '../store.js';


export default {
    name: "MyCard",
    props: {
        title: String,
    },

    Data() {
        return {
            store
        }
    }
}
</script>


<style scoped></style>