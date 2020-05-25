import { defineConfig } from 'umi';
import routerConfig from './config/router.config';

const cdnPath = 'https://poet-1253467707.cos.ap-beijing.myqcloud.com/';

export default defineConfig({
    history: { type: 'hash' },
    routes: routerConfig,
    inlineLimit: 50000,
    hash: true,
    favicon: 'favicon.ico',
    publicPath: process.env.NODE_ENV === "development" ? "/" : cdnPath,
});
