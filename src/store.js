

import { reactive } from 'vue';

export const store = reactive(
    {
        arrayApi: [],
        arrayTvSeries: [],
        search: "",
        apiImage: "https://image.tmdb.org/t/p/w342/",
    }
);