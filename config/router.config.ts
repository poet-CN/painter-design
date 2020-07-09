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
                path: '/profile/detail/game-city',
                component: '@/pages/Profile/Detail/GameCity',
                title: '李倩-风云再起电玩城包装设计',
                exact: true,
            },
            {
                path: '/profile/detail/spools',
                component: '@/pages/Profile/Detail/Spools',
                title: '李倩-"破茧成蝶"绕线轴设计',
                exact: true,
            },
            {
                path: '/profile/detail/health-care',
                component: '@/pages/Profile/Detail/HealthCare',
                title: '李倩-儿童用心电图机吸球',
                exact: true,
            },
            {
                path: '/profile/detail/coat-rack',
                component: '@/pages/Profile/Detail/CoatRack',
                title: '李倩-翻花绳组合衣帽架',
                exact: true,
            },
            {
                path: '/profile/detail/modular-furniture',
                component: '@/pages/Profile/Detail/ModularFurniture',
                title: '李倩-几何家居',
                exact: true,
            },
            {
                path: '/profile/detail/magic-mirror',
                component: '@/pages/Profile/Detail/MagicMirror',
                title: '李倩-"魔镜"智能化妆镜',
                exact: true,
            },
            {
                path: '/profile/detail/ke-silk',
                component: '@/pages/Profile/Detail/KeSilk',
                title: '李倩-"缂丝织发"缂丝文创',
                exact: true,
            },
            {
                path: '/profile/detail/rescue-equipment',
                component: '@/pages/Profile/Detail/RescueEquipment',
                title: '李倩-多功能地震救援装备',
                exact: true,
            },
            {
                path: '/profile/detail/pre-examination',
                component: '@/pages/Profile/Detail/PreExamination',
                title: '李倩-预检分诊机器人',
                exact: true,
            },
            {
                path: '/profile/detail/smart-car',
                component: '@/pages/Profile/Detail/SmartCar',
                title: '李倩-智能汽车空间布局设计',
                exact: true,
            },
            {
                path: '/profile/detail/mp3',
                component: '@/pages/Profile/Detail/MP3',
                title: '李倩-复读机音乐播放器',
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
