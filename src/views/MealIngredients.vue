<template>
  <h2 class="text-2xl font-semibold">Meal Ingredients</h2>

  <input
    type="text"
    placeholder="search ingredients"
    class="border border-red-600 w-full py-1 px-2 rounded my-5"
    v-model="ingredient"
  />

  <div class="grid grid-cols-2 gap-5">
    <RouterLink
      :to="{ name: 'byIngredients', params: { ingredient: ingredient.strIngredient } }"
      v-for="ingredient of ingredients"
      :key="ingredient"
      class="px-2 py-1 shadow"
    >
      {{ ingredient.strIngredient }}
    </RouterLink>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import { useMealStore } from '../stores/meals.js'
const mealStore = useMealStore()
const ingredient = ref('')

const ingredients = computed(() => {
  return mealStore.mealIngredients.ingredients.filter((meal) =>
    meal.strIngredient.toLowerCase().includes(ingredient.value.toLowerCase())
  )
})
onMounted(async () => {
  await mealStore.fetchMealIngredients()
})
</script>
