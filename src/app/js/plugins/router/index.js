import { createWebHashHistory, createRouter } from "vue-router";
import Views from '@views/_all';

import notFound from '@views/404';

const routes = [
  // === Default routes ===
  {
    path: '/',
    redirect: '/startpage'
  },

  // === Custom routes ===
  // ...

  // === Views ===
  ...createRoutes(Views),

  {
    path: '/:pathMatch(.*)',
    component: notFound
  },
];

export default createRouter({
  history: createWebHashHistory(),
  routes,
});

function createRoutes (obj) {
  const defaultRoutes = [];

  for (let [name, comp] of Object.entries(obj)) {
    defaultRoutes.push({
      path: `/${name.toLowerCase()}`,
      name: `${name}`,
      component: comp,
    });
  };

  return defaultRoutes;
}
