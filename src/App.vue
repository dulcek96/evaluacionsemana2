<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>



/* Estilos para los enlaces dentro del header */
nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

/* Estilos para el header en pantallas grandes (mínimo 1024px de ancho) */
@media (min-width: 1024px) {
  header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
    background-color: #fff; /* Puedes agregar un fondo si lo deseas */
    z-index: 9999; /* Agrega una posición z para asegurar que esté por encima de otros elementos */
  }
}


</style>
