<template>
  <h2 class="font-semibold text-2xl mb-5">Random Meals</h2>
  <MealList :meals="meals" />
</template>

<script setup>
import axios from 'axios'
import { onMounted, ref } from 'vue'
import MealList from '../components/MealList.vue'

const meals = ref([])

onMounted(async () => {
  for (let i = 1; i <= 10; i++) {
    const res = await axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
    meals.value.push(res.data.meals[0])
  }
})
</script>
