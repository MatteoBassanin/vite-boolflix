

import { reactive } from 'vue';

export const store = reactive(
    {
        arrayApi: [],
        arrayTvSeries: [],
        arrayGenre: [],
        arrayTvGenre: [],
        mergedArrayGenre: [],
        search: "",
        chosenGenre: "",
        apiImage: "https://image.tmdb.org/t/p/w342/",
    }
);