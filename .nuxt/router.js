import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _438cdf82 = () => interopDefault(import('../pages/early_bird/index.vue' /* webpackChunkName: "pages/early_bird/index" */))
const _1171d862 = () => interopDefault(import('../pages/helptickets/index.vue' /* webpackChunkName: "pages/helptickets/index" */))
const _842ab1d0 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/student/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/early_bird",
    component: _438cdf82,
    name: "early_bird"
  }, {
    path: "/helptickets",
    component: _1171d862,
    name: "helptickets"
  }, {
    path: "/",
    component: _842ab1d0,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
