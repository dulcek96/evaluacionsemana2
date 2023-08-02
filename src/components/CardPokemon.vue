<script setup>
import { ref } from 'vue';

const pokemon = [
    {
        name: "zubat",
        base_experience: "64",
        game_index: "153",
        porter: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/41.png",
    },
    {
        name: "bulbasaur",
        base_experience: "70",
        game_index: "180",
        porter: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
    },
    {
        name: "ivysaur",
        base_experience: "50",
        game_index: "150",
        porter: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/2.png",
    },
    {
        name: "venusaur",
        base_experience: "90",
        game_index: "130",
        porter: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/3.png",
    }
];
</script>

<template>

<div v-for="item in pokemon" :key="item.name" class="col">
  <div class="card">
        <div class="card-body">
          <h5 class="card-title"> {{ item.name }}</h5>
          <p class="card-text"> Base experience:  {{ item.base_experience }}</p>
          <!-- Aquí puedes agregar más detalles del Pokémon si lo deseas -->
          <img :src="item.porter" alt="Pokemon Sprite" class="pokemon-sprite" />
        </div>
      </div>
    </div>
</template>

<style>
.card {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
  width: 200px;
}

.card-title {
  font-size: 18px;
  font-weight: bold;
}

.card-text {
  font-size: 14px;
}

.pokemon-sprite {
  max-width: 100px;
  max-height: 100px;
  display: block;
  margin: 0 auto;
}

</style>