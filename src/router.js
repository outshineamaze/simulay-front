import codeMirror from './components/codemirror.vue'
const routers = [

    {
        path: '/',
        redirect: '/code'
    },

    {
        path: '/code',
        meta: {
            title: 'Simulay在线仿真'
        },
        component: (resolve) => require(['./views/index.vue'], resolve),
        children: [
            {
                path: 'edit',
                component:  codeMirror
            },
            {
                path: 'result',
                component: (resolve) => require(['./components/result.vue'], resolve),

            },{
                path: 'analysis',
                component: (resolve) => require(['./components/analysis.vue'], resolve),

},{
                path: 'setting',
                component: {template: 'hello'}
            }
        ]
    },
    {
        path: '/api',
        meta: {
            title: '数据api'
        },
        component: (resolve) => require(['./views/api.vue'], resolve),
    },
    {
        path: '/container',
        meta: {
            title: '容器管理'
        },
    component: (resolve) => require(['./components/test.vue'], resolve),
    }
];
export default routers;