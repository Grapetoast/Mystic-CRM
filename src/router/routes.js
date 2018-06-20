
export default [

  { path: '/Account', component: () => import('pages/Account') },
  { path: '/Login', component: () => import('pages/Login') },
  { path: '/Register', component: () => import('pages/Register') },
  { path: '/Short/:linkId/:leadId/:campaignId', component: () => import('pages/Short'), props: true },
  { path: '/Unsubscribe/:campaignId/:leadId', component: () => import('pages/Unsubscribe'), props: true },
  { path: '/Marketing', component: () => import('pages/Marketing') },
  { path: '/Leads', component: () => import('pages/Leads') },
  { path: '/', component: () => import('pages/Calendar') },
  { path: '/Analytics', component: () => import('pages/Analytics') },
  { path: '/Employees', component: () => import('pages/Employees') },
  { // Always leave this as last one
    path: '*',
    component: () => import('pages/404')
  }
]
