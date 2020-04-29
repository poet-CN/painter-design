import React, { Component } from 'react';
import ReturnBtn from '@/components/ReturnBtn';
import { ConnectType } from '@/models/connect';

interface ProfileDetailLayoutProps {
    location: ConnectType['location'];
    history: ConnectType['history'];
}

interface ProfileDetailLayoutState {
    returnPath: string;
}

class ProfileDetailLayout extends Component<ProfileDetailLayoutProps, ProfileDetailLayoutState>{
    state = {
        returnPath: '/',
    };

    // 想做成，详情页固定返回列表页，列表页固定返回首页
    goBack = () => {
        const { pathname } = this.props.location;
        if (pathname.indexOf('detail') > -1) {
            this.setState({
                returnPath: '/profile/list',
            });
            return;
        }
        this.setState({
            returnPath: '/',
        });
    }

    render() {
        return (
            <>
                <ReturnBtn {...this.props}/>
                {this.props.children}
            </>
        );
    }
}

export default ProfileDetailLayout;
