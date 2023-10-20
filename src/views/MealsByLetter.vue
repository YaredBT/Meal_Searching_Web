<template>
  <div class="flex gap-5 flex-wrap justify-center items-center">
    <RouterLink
      v-for="letter in alphabets"
      :key="letter"
      class="text-2xl cursor-pointer bg-slate-100 px-2"
      :to="{ name: 'byLetter', params: { letter } }"
      >{{ letter }}</RouterLink
    >
  </div>
  <div v-if="mealStore.searchedMeals.isLoading">Loading...</div>
  <div v-else-if="mealStore.searchedMeals.isError">Something unexpected happened</div>
  <div v-else-if="!mealStore.searchedMeals.meals">No meals found</div>
  <MealList v-else :meals="meals" />
</template>

<script setup>
import { useRoute, RouterLink } from 'vue-router'
import { onMounted, watch, computed } from 'vue'
import MealList from '../components/MealList.vue'
import { useMealStore } from '../stores/meals.js'
const mealStore = useMealStore()

const route = useRoute()

const meals = computed(() => {
  return mealStore.mealsByLetter.meals
})

watch(route, async () => {
  await mealStore.fetchMealsByLetter(route.params.letter)
})

onMounted(async () => {
  await mealStore.fetchMealsByLetter(route.params.letter)
})

const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
</script>
