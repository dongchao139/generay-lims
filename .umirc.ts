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
            { exact: true, path: '/pages/Option1', component: '@/pages/Option1' },
            { exact: true, path: '/pages/Option1Detail', component: '@/pages/Option1Detail' },
            { exact: true, path: '/pages/Option2', component: '@/pages/Option2' },
            { exact: true, path: '/pages/Option3', component: '@/pages/Option3' },
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
