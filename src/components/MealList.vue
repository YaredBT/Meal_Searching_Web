<template>
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
      <div class="p-3">
        <YouTubeButton :to="meal.strYoutube" />
      </div>
    </div>
  </div>
</template>

<script setup>
import YouTubeButton from './YouTubeButton.vue'
import { RouterLink } from 'vue-router'
const { meals } = defineProps({
  meals: {
    type: Object,
    required: true
  }
})
</script>
