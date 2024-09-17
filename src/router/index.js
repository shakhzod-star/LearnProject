import { 
    createRouter,
    createWebHistory, 
  } from 'vue-router'
  import { routers } from '@/router/router' 
  
  const routes  = [...routers]
  
  export const router  = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(_to, _from, savedPosition) {
      if (savedPosition) {
        return savedPosition
      } else {
        return { top: 0 }
      }
    }
  })
  
//   router.beforeEach((to, _, next) => {
//     const isAuthenticated = getItem('Authorization')
  
//     if (to.path !== '/login' && !isAuthenticated) next({ name: 'Login' })
//     if (to.meta.public && !!isAuthenticated) next({ name: 'Institutions' })
//     if (to.path === '/' && isAuthenticated) next({ name: 'Institutions' })
//     else next()
//   })