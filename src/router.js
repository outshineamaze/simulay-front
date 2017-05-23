const routers = [

    {
        path: '/',
        redirect: '/simulation/ide/edit',
        meta: {
            title: 'Simulay在线仿真'
        },
    },
    {
        path:'/api/list',
        meta:{title:'API列表'},
        component: (resolve) => require(['./views/api.vue'], resolve)
    },
{
    path: '/simulation',
    meta: {
    title: 'Simulay在线仿真'
    },
    component: (resolve) => require(['./views/simulation.vue'], resolve),
    children: [
        {
            path: 'ide',
            meta: {
                title: 'Simulay在线仿真'
            },
            component: (resolve) => require(['./views/ide.vue'], resolve),
        children: [
    {
        path: ':simulationId?/edit',
        component:  (resolve) => require(['./components/codemirror.vue'], resolve),
},
    {
        path: ':simulationId?/result',
            component: (resolve) => require(['./components/result.vue'], resolve),

    },{
    path: ':simulationId?/analysis',
        component: (resolve) => require(['./components/analysis.vue'], resolve),

},{
    path: ':simulationId?/setting',
        component: {template: 'hello'}
}
]
},
    {
        path: 'cmd',
            meta: {title:'命令行'},
        component: (resolve) => require(['./views/cmd.vue'], resolve)
    },
    {   path: 'experiment/recommend',
        meta: {title:'推荐实验'},
        component: (resolve) => require(['./views/exp_recom.vue'], resolve)
    },{   path: 'experiment/history',
    component: (resolve) => require(['./views/exp_history.vue'], resolve)
},{
    path:'list/teach',
        meta: {title:'实验列表'},
    component: (resolve) => require(['./views/list_teach.vue'], resolve)
},{
    path:'list/custom',
        meta:{title:'自定义实验列表'},
    component: (resolve) => require(['./views/list_custom.vue'], resolve)
}

    ]

},

];
export default routers;