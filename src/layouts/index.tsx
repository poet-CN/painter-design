import { ConfigProvider } from 'antd';
import 'normalize.css/normalize.css';
import React, { Component } from 'react';
import EmptyLayout from './EmptyLayout';
import ProfileDetailLayout from './ProfileDetailLayout';
import { ConnectType } from '@/models/connect';

interface LayoutProps {
    location: ConnectType['location'];
    history: ConnectType['history'];
}

// 将所有路由统一导入到此页面，再通过路由来判断使用哪个layout。目的是为了解决umi全局引入css和js的问题。
class Layout extends Component<LayoutProps, {}> {
    componentDidUpdate(prevProps: Readonly<LayoutProps>, prevState: Readonly<{}>, snapshot?: any): void {
        if (this.props.location.pathname.includes('detail')) {
            window.scrollTo(0, 0);
        }
    }

    componentDidMount(): void {
        window.lover = 'Poet';
        // 禁用右键菜单
        document.oncontextmenu = () => {
            return false;
        };
        // 禁用页面所有按键
        document.onkeydown = (e) => {
            return false;
        };
        // 禁止选择
        document.onselectstart = () => {
            return false;
        };
        // 禁止图片拖动
        document.ondragstart = () => {
            return false;
        };
    }

    getLayout = () => {
        const { pathname } = this.props.location;
        if (pathname.indexOf('profile') > -1) {
            // @ts-ignore
            return <ProfileDetailLayout {...this.props}/>;
        }
        return <EmptyLayout {...this.props} />;
    };

    // ConfigProvider可以配置国际化
    render() {
        return <ConfigProvider>{this.getLayout()}</ConfigProvider>;
    }
}

export default Layout;
