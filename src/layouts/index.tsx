import HomeLayout from '@/layouts/HomeLayout';
import { ConfigProvider } from 'antd';
import 'normalize.css/normalize.css';
import React, { Component } from 'react';
import BasicLayout from './BasicLayout';
import EmptyLayout from './EmptyLayout';

// 将所有路由统一导入到此页面，再通过路由来判断使用哪个layout。目的是为了解决umi全局引入css和js的问题。
class Layout extends Component<any, null> {
    getLayout = () => {
        // const { pathname } = this.props.location;
        console.log(1);
        return <EmptyLayout {...this.props} />;
    };

    // ConfigProvider可以配置国际化
    render() {
        return <ConfigProvider>{this.getLayout()}</ConfigProvider>;
    }
}

export default Layout;
