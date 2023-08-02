<template>
  <div>
    <ul>
      <li v-for="(value, key) in formulario" :key="key" >
        {{ key }}: {{ value }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

</script>