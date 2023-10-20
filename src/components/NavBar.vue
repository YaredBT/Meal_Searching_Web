import {RouterLink} from "vue-router"

<template>
  <nav class="flex justify-between p-2 shadow items-center">
    <div>
      <RouterLink to="/" class="lg:text-2xl font-bold">Home</RouterLink>
    </div>
    <div class="flex gap-2 lg:gap-5">
      <RouterLink to="/by-name" class="lg:text-xl">Meals by Name</RouterLink>
      <RouterLink to="/by-letter" class="lg:text-xl">Meals by Letter</RouterLink>
      <RouterLink to="/ingredients" class="lg:text-xl">Ingredients</RouterLink>
    </div>
  </nav>
</template>

<script setup></script>

<style>
.router-link-exact-active {
  color: orange;
}
</style>
