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
                title: '李倩-桃李不言，巧笑倩兮',
                exact: true,
            },
            { path: '/profile', redirect: '/profile/list' },
            {
                path: '/profile/list',
                component: '@/pages/Profile/List',
                title: '李倩-我的作品集',
                exact: true,
            },
            {
                path: '/profile/detail/1',
                component: '@/pages/Profile/Detail/1',
                title: '李倩-电玩城包装设计',
                exact: true,
            },
            {
                path: '/profile/detail/2',
                component: '@/pages/Profile/Detail/2',
                title: '李倩-破茧成蝶',
                exact: true,
            },
            {
                path: '/profile/detail/3',
                component: '@/pages/Profile/Detail/3',
                title: '李倩-儿童医疗',
                exact: true,
            },
            {
                path: '/profile/detail/4',
                component: '@/pages/Profile/Detail/4',
                title: '李倩-翻花绳',
                exact: true,
            },
            {
                path: '/profile/detail/5',
                component: '@/pages/Profile/Detail/5',
                title: '李倩-家具设计',
                exact: true,
            },
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
