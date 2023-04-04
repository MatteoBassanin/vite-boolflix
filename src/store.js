

import { reactive } from 'vue';

export const store = reactive(
    {
        arrayApi: [],
        arrayTvSeries: [],
        arrayGenre: [],
        search: "",
        apiImage: "https://image.tmdb.org/t/p/w500/",
    }
);