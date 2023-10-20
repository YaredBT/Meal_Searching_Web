<template>
  <h2 class="text-2xl font-semibold mb-5">Meals by Ingredients</h2>
  <div class="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4">
    <div v-for="meal of meals" :key="meal.idMeal" class="rounded-lg shadow-lg">
      <RouterLink :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
        <img
          :src="meal.strMealThumb"
          :alt="meal.strMeal"
          class="rounded-t-lg h-48 object-cover w-full mb-2"
        />
      </RouterLink>
      <h3 class="text-xl font-semibold px-2">{{ meal.strMeal }}</h3>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { onMounted, computed } from 'vue'
import { useMealStore } from '../stores/meals.js'

const route = useRoute()
const mealStore = useMealStore()
const meals = computed(() => {
  return mealStore.mealsByIngredients.meals
})

onMounted(async () => {
  await mealStore.fetchMealsByIngredient(route.params.ingredient)
})
</script>
