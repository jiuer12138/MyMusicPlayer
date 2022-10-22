import  {createWebHashHistory,createRouter,RouteRecordRaw} from 'vue-router'
const constantRoutes:Array<RouteRecordRaw>=[
    {
        path:'/',
        name:'Layout',
        meta:{
            title:'首页',
            keepalive:false,
            requireAuth:false
        },
        component:()=>import('@/layout/index.vue')
    },
    {
        path:'/login',
        name:'Login',
        meta:{
            title:'登录',
            keepalive:true,
            requireAuth:false
        },
        component:()=>import('@/views/login/index.vue')
    },
    {
        path: '/:pathMatch(.*)',
        redirect: '/404'
    },
    {
        path:'/404',
        name:'NotFound',
        meta:{
            title:'404',
            keepalive:false,
            requireAuth:false
        },
        component:()=>import('@/views/login/index.vue')
    },
]
export const router =createRouter({
    history:createWebHashHistory(),
    routes: constantRoutes,
})

export default router
