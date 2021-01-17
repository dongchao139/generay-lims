import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { exact: true, path: '/login', component: '@/login' },
    {
      exact: false, path: '/', component: '@/layouts/index',
      routes: [
        { exact: true, path: '/', component: '@/pages/index' },
        {
          exact: true, path: '/users', component: '@/pages/users'
        },
        { component: '@/pages/404' },
      ],
      wrappers: [
        '@/wrappers/auth'
      ]
    },
  ],
});
