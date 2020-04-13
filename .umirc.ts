import { defineConfig } from 'umi';
import routerConfig from './config/router.config';

export default defineConfig({
    history: { type: 'hash' },
    routes: routerConfig,
    // dynamicImport: {
    //     loading: '@/pages/Loading',
    // },
    hash: true,
});
