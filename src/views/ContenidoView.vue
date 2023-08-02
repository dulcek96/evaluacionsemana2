<script setup>
import { RouterLink } from 'vue-router'

const pokemons =  ['zubat', 'bulbasaur', 'ivysaur', 'venusaur']
</script>

<template>
  <div>
    <h1>Pokemons</h1>
    <ul class="nav">
      <li v-for="item in pokemons" class="nav-item">
        <RouterLink :to="`/Pokemon/${item}`" class="nav-link">  {{ item }}</RouterLink>
      </li>
    </ul>
  </div>
</template>


