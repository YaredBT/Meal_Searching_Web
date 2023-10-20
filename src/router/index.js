import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '../views/MainLayout.vue'
import HomeView from '../views/HomeView.vue'
import MealsByName from '../views/MealsByName.vue'
import MealsByLetter from '../views/MealsByLetter.vue'
import MealIngredients from '../views/MealIngredients.vue'
import MealsByIngredient from '../views/MealsByIngredient.vue'
import MealDetails from '../views/MealDetails.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: MainLayout,
      children: [
        {
          path: '',
          name: 'home',
          component: HomeView
        },
        {
          path: '/by-name',
          name: 'byName',
          component: MealsByName
        },
        {
          path: 'by-letter/:letter?',
          name: 'byLetter',
          component: MealsByLetter
        },
        {
          path: 'ingredients',
          name: 'mealIngredients',
          component: MealIngredients
        },
        {
          path: 'by-ingredients/:ingredient?',
          name: 'byIngredients',
          component: MealsByIngredient
        },
        {
          path: 'details/:id',
          name: 'mealDetails',
          component: MealDetails
        }
      ]
    }
  ]
})

export default router
