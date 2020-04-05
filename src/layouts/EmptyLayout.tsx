import { connect } from 'dva';
import React, { Component } from 'react';
import { Dispatch, AnyAction } from 'redux';
import { ConnectType } from '@/models/connect';
import { GlobalStoreState } from '@/models/global';

interface BasicLayoutProps {
    dispatch: Dispatch<AnyAction>;
    global: GlobalStoreState;
}

class EmptyLayout extends Component<BasicLayoutProps, {}> {
    render() {
        console.log(this.props.children);
        return <>{this.props.children}</>;
    }
}

export default connect(({ global }: ConnectType) => ({ global }))(EmptyLayout);
