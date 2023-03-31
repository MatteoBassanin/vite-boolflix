<template>
  <MyHeader></MyHeader>
</template>

<script>
import axios from 'axios';
import MyHeader from './components/MyHeader.vue';
import { store } from './store.js';

export default {
  components: {
    MyHeader,
  },

  data() {
    return {
      store
    }
  }
}
</script>


<style></style>