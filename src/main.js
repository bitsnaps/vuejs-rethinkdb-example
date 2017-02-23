import Vue from 'vue'
import Router from 'vue-router'
import Resource from 'vue-resource'
import App from './App'
import ProjectNew from './components/ProjectNew'
import ProjectList from './components/ProjectList'
import ProjectView from './components/ProjectView'

import Invite from './components/Invite'
import AboutUs from './components/AboutUs'
import Photos from './components/Photos'
import Location from './components/Location'
import Attendance from './components/Attendance'

Vue.use(Router)
Vue.use(Resource)

const router = new Router()

router.map({
  '/invite': {
    component: Invite
  },

  '/aboutus': {
    component: AboutUs
  },

  '/photos': {
    component: Photos
  },

  '/location': {
    component: Location
  },

  '/attendance': {
    component: Attendance
  },

  '/projects/new': {
    component: ProjectNew
  },

  '/projects': {
    component: ProjectList
  },

  '/project/:id': {
    component: ProjectView
  }
})

router.beforeEach(function () {
  window.scrollTo(0, 0)
})

router.redirect({
  '*': '/Invite'
})

router.start(App, '#app')
