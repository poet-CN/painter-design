import { defineConfig } from 'umi';
import routerConfig from './config/router.config';

export default defineConfig({
    history: { type: 'hash' },
    routes: routerConfig,
    inlineLimit: 2000000,
    hash: true,
    favicon: 'favicon.ico',
});
