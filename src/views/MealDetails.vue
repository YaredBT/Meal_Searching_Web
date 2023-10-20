<template>
  <div class="p-2">
    <h2 class="mb-5 text-3xl font-bold">{{ meal.strMeal }}</h2>
    <img :src="meal.strMealThumb" :alt="meal.strMeal" />
    <div class="flex justify-between mb-3">
      <span class="flex gap-2"><strong>Category</strong>{{ meal.strCategory }}</span>
      <span class="flex gap-2"><strong>Area:</strong>{{ meal.strArea }}</span>
      <span class="flex gap-2"><strong>Tags:</strong>{{ meal.strTags }}</span>
    </div>
    <h3 class="font-semibold text-xl mb-1">Instruction:</h3>
    <p class="mb-3">{{ meal.strInstructions }}</p>
    <div class="grid grid-cols-1 sm:grid-cols-2">
      <div class="">
        <h3 class="text-xl font-semibold mb-1">Ingredients</h3>
        <ul v-for="(element, index) of new Array(20)" :key="index">
          <li v-if="meal[`strIngredient${index}`]">
            {{ index }}, {{ meal[`strIngredient${index}`] }}
          </li>
        </ul>
      </div>
      <div class="">
        <h3 class="text-xl font-semibold mb-1">Measures</h3>
        <ul v-for="(element, index) of new Array(20)" :key="index">
          <li v-if="meal[`strMeasure${index}`]">{{ index }}, {{ meal[`strMeasure${index}`] }}</li>
        </ul>
      </div>
    </div>
    <YouTubeButton :href="meal.strYoutube" />
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'
import YouTubeButton from '../components/YouTubeButton.vue'

const route = useRoute()
const meal = ref({})

onMounted(async () => {
  const res = await axios.get(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${route.params.id}`
  )
  meal.value = res.data.meals[0]
})
</script>
