<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="container">
    <RouterLink class="space" to="/">Alumnos</RouterLink>
    <RouterLink class="space" to="/careers">Carreras</RouterLink>
  </div>
  <RouterView />
</template>

<style>
body {
  background-color: white;
  height: 100%;
  width: 100%;
}

.container{
  display: flex;
  align-items: start;
  justify-content: start;
  height: 100%;
  width: 100%;
}
.space {
  margin: 0 20px;
}
</style>
