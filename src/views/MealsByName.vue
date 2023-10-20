<template>
  <div class="py-5">
    <input
      type="text"
      v-model="searchWord"
      class="border border-black w-full rounded px-2 py-1 mb-10"
      placeholder="type meal name to search meals"
      @change="searchMeals"
    />
    <div v-if="mealStore.searchedMeals.isLoading">Loading...</div>
    <div v-else-if="mealStore.searchedMeals.isError">Something unexpected happened</div>
    <div v-else-if="!mealStore.searchedMeals.meals">No meals found</div>
    <MealList v-else :meals="meals" />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useMealStore } from '../stores/meals.js'
import MealList from '../components/MealList.vue'
const mealStore = useMealStore()

const searchWord = ref('')
const meals = computed(() => {
  return mealStore.searchedMeals.meals
})

const searchMeals = async () => {
  if (!searchWord.value.trim()) {
    mealStore.searchedMeals.meals = []
    return
  }

  await mealStore.fetchMealsByName(searchWord.value)
}
</script>
