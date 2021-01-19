
const routes = [
  {
    path: '/',
    component: () => import('layouts/PTLayout.vue'),
    children: [
      { path: '', component: () => import('pages/PTbr.vue') }
    ]
  },
  {
    path: '/eng',
    component: () => import('layouts/EngLayout.vue'),
    children: [
      { path: '', component: () => import('pages/engPage.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
