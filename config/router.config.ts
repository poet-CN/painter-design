interface RouterConfigProps {
    path: string;
    component?: string;
    routes?: RouterConfigProps[];
    exact?: boolean;
    redirect?: string;
    title?: string;
}

const routerConfig: RouterConfigProps[] = [
    {
        path: '/',
        component: '../layouts',
        routes: [
            {
                path: '/',
                component: '@/pages/Home',
                title: '首页',
                exact: true,
            },
            { path: '/profile', redirect: '/profile/list' },
            {
                path: '/profile/list',
                component: '@/pages/Profile/List',
                title: '作品集列表页',
                exact: true,
            },
            {
                path: '/profile/detail',
                component: '@/pages/Profile/Detail',
                title: '作品详情页',
                exact: true,
            },
            // {
            //     path: '/loading',
            //     component: '../pages/Loading',
            //     title: '加载中页面',
            // },
            {
                path: '*',
                component: '../pages/NotFound',
                title: '未找到的页面',
            },
        ],
    },
    { path: '*', component: '../pages/NotFound', title: '未找到的页面' },
];

export default routerConfig;
