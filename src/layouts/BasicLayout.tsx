import { connect } from 'dva';
import React, { Component } from 'react';
import { Dispatch, AnyAction } from 'redux';
import { ConnectType } from '@/models/connect';
import { GlobalStoreState } from '@/models/global';

interface BasicLayoutProps {
    dispatch: Dispatch<AnyAction>;
    global: GlobalStoreState;
}

class BasicLayout extends Component<BasicLayoutProps, {}> {
    render() {
        return (
            <div>
                <p>Basic Layout</p>
                {this.props.children}
            </div>
        );
    }
}

export default connect(({ global }: ConnectType) => ({ global }))(BasicLayout);
