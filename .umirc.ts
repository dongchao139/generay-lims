import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      exact: false, path: '/', component: '@/layouts/globalContext',
      routes: [
        { exact: true, path: '/login', component: '@/login' },
        {
          exact: false, path: '/pages', component: '@/layouts/index',
          routes: [
            { exact: true, path: '/pages/index', component: '@/pages/index' },
            { exact: true, path: '/pages/users', component: '@/pages/users' },
            { component: '@/pages/404' },
          ],
          wrappers: [
            '@/wrappers/auth'
          ]
        },
      ]
    }
  ],
});
