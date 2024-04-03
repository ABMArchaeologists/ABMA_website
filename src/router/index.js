import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CourseView from '../views/CourseView.vue'
import AboutTutorialView from '../views/AboutTutorialView.vue'
// import TutorialView from '../views/TutorialView.vue'
import AboutView from '../views/AboutView.vue'
import ResourcesView from '../views/ResourcesView.vue'
import HowToGuideView from '../views/HowToGuideView.vue'
import SpocCourseView from '../views/SpocCourseView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/course',
    name: 'course',
    component: CourseView
  },
  {
    path: '/about-tutorial',
    name: 'about-tutorial',
    component: AboutTutorialView
  },
  // {
  //   path: '/tutorial',
  //   name: 'tutorial',
  //   component: TutorialView
  // },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/resources',
    name: 'resources',
    component: ResourcesView
  },
  {
    path: '/howtoguide',
    name: 'howtoguide',
    component: HowToGuideView
  },
  {
    path: '/spoc-course',
    name: 'spoc-course',
    component: SpocCourseView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior () {
    return { top: 0 }
  }
})

export default router
