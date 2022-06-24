import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Meldingen from '../views/Meldingen.vue'
import NewStory from '../views/Stories/NewStory.vue'
import StoryDetails from '../views/StoryDetails.vue'
import MeldingDetails from '../views/MeldingDetails.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/meldingen',
    name: 'meldingen',
    component: Meldingen

  }
  ,
  {
    path: '/new-story',
    name: 'NewStory',
    component: NewStory

  },
  {
    path: '/stories/:id',
    name: 'StoryDetails',
    component: StoryDetails,
    props: true

  }
  ,
  {
    path: '/meldingen/:id',
    name: 'MeldingDetails',
    component: MeldingDetails,
    props: true

  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
