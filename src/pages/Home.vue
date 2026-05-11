<script setup>
import { ref } from "vue";
const movies = ref([]);

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNzhjNDQwZGMyNjJkMmZlMTBhMjE4OGQwZDZiMWM5OCIsIm5iZiI6MTc1NzE3NDY5My45OTMsInN1YiI6IjY4YmM1YmE1ZmNjNTI2MGVlMDliZmY4NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BuL7KJ2syviF-Vd8u0bysFBK971KVqQW3aHXL5BPiCU",
  },
};
fetch(
  "https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=2&sort_by=popularity.desc",
  options,
)
  .then((res) => res.json())
  .then((res) => {
    movies.value = res.results;

    console.log(res);
  })
  .catch((err) => console.error(err));
</script>

<template>
    <div>
        <h1 class="text-center text-5xl font-bold pt-5">Product List</h1>
        <div class="bg-blue-700 w-11/12 m-auto grid grid-cols-4 gap-5 gap-y-5">
            <div v-for="m in movies" class="h-150 bg-pink-500">
                <img
          :src="`https://image.tmdb.org/t/p/w500${m.backdrop_path}`"
          class="w-full h-3/4"
          alt=""/>
            </div>
            
        </div>
        
    </div>
</template>