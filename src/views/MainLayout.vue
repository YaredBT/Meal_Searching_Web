<template>
  <NavBar />
  <div class="p-2 w-[100%] lg:w-[80%] mx-auto">
    <RouterView />
  </div>
</template>

<script setup>
import NavBar from '../components/NavBar.vue'
import { RouterView } from 'vue-router'
</script>
