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
            { exact: true, path: '/pages/index', component: '@/pages/index/index' },
            { exact: true, path: '/pages/Option1', component: '@/pages/Option1/Option1' },
            { exact: true, path: '/pages/Option1Detail', component: '@/pages/Option1/Option1Detail' },
            { exact: true, path: '/pages/Option2', component: '@/pages/Option2' },
            { exact: true, path: '/pages/Option3', component: '@/pages/Option3' },

            { exact: true, path: '/pages/ProcessList', component: '@/pages/workflow/ProcessList' },
            { exact: true, path: '/pages/WaitingList', component: '@/pages/workflow/WaitingList' },
            { component: '@/pages/404/404' },
          ],
          wrappers: [
            '@/wrappers/auth'
          ]
        },
        { exact: true, path: '/workflowedit', component: '@/pages/workflow/WorkflowEdit', wrappers: [ '@/wrappers/auth' ] }
      ]
    }
  ],
});
