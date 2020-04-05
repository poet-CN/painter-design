import React, { Component } from 'react';
import { Spin } from 'antd';
import style from './style.less';

export default class Loading extends Component<null, null> {
    render() {
        return (
            <div className={style.loading_container}>
                <div className={style.loading}>
                    <Spin />
                    <p>努力加载中……</p>
                </div>
            </div>
        );
    }
}
