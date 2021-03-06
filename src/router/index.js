import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home'
import Personality from '@/pages/personality'
import Normal from '@/pages/normal'
import Popups from '@/pages/popups'
import PopupsNew from '@/pages/popups-new'
import Popupstest from '@/pages/popupstest'
import Search from '@/pages/search'

Vue.use(Router)
// path:'type/:type/businessUserList',
export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/notheme',
      name: 'normal',
      component: Normal
    },
    {
      path: '/personalitytheme',
      name: 'personality',
      component: Personality
    },
    {
      path: '/popups',
      name: 'popups',
      component: Popups
    },
    {
      path: '/popupstest',
      name: 'popupstest',
      component: Popupstest
    },
    {
      path: '/popupsnew',
      name: 'popupsnew',
      component: PopupsNew
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    }
  ]
})
