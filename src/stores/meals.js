import { defineStore } from 'pinia'
import axios from 'axios'
import { ref } from 'vue'

export const useMealStore = defineStore('meals', () => {
  const searchedMeals = ref({
    meals: [],
    isLoading: null,
    isError: false
  })
  const mealsByLetter = ref({
    meals: [],
    isLoading: null,
    isError: false
  })
  const mealIngredients = ref({
    ingredients: [],
    isLoading: null,
    isError: false
  })
  const mealsByIngredients = ref({
    meals: [],
    isLoading: null,
    isError: false
  })

  async function fetchMealsByName(searchMeal) {
    try {
      this.searchedMeals.isLoading = true

      const res = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchMeal}`
      )
      this.searchedMeals.meals = res.data.meals
    } catch (error) {
      this.searchedMeals.isError = true
    } finally {
      this.searchedMeals.isLoading = false
    }
  }
  async function fetchMealsByLetter(letter) {
    try {
      this.mealsByLetter.isLoading = true

      const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`)
      this.mealsByLetter.meals = res.data.meals
    } catch (error) {
      this.mealsByLetter.isError = true
    } finally {
      this.mealsByLetter.isLoading = false
    }
  }
  async function fetchMealIngredients() {
    try {
      this.mealIngredients.isLoading = true

      const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
      this.mealIngredients.ingredients = res.data.meals
    } catch (error) {
      this.mealIngredients.isError = true
    } finally {
      this.mealIngredients.isLoading = false
    }
  }
  async function fetchMealsByIngredient(ingredient) {
    try {
      this.mealsByIngredients.isLoading = true

      const res = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
      )

      this.mealsByIngredients.meals = res.data.meals
    } catch (error) {
      this.mealsByIngredients.isError = true
    } finally {
      this.mealsByIngredients.isLoading = false
    }
  }

  return {
    searchedMeals,
    mealIngredients,
    fetchMealIngredients,
    fetchMealsByName,
    mealsByLetter,
    fetchMealsByLetter,
    mealsByIngredients,
    fetchMealsByIngredient
  }
})
