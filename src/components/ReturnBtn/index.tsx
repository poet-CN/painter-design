/*
* usage: 浮动返回按钮
* props:
* - fixed: 是否以固定定位的方式置于页面中，默认是。
* - className: 类名。
* - style: 样式。
* - onPress: 可选，回调函数；
* - returnPath: 可选，跳转到什么路由。
* */

import React, { Component } from 'react';
import { RollbackOutlined } from '@ant-design/icons';
import styles from './style.less';

interface ReturnBtnProps {
    fixed?: boolean;
    className?: string;
    style?: {
        [key: string]: string;
    };
    onPress?: () => any;
    returnPath?: string;
    history: {
        go: (index: number) => void;
        push: (index: string) => void;
    };
}

class ReturnBtn extends Component<ReturnBtnProps, {}>{
    onBtnClicked = () => {
        const { onPress, returnPath } = this.props;
        if (typeof onPress === 'function') {
            onPress();
            return;
        }
        if (typeof returnPath === 'string') {
            this.props.history.push(returnPath);
            return;
        }
        this.props.history.go(-1);
    }

    render() {
        const { fixed = true, className, style = {} } = this.props;
        return (
            <div>
                <p className={`${styles.back_btn} ${fixed ? styles.back_btn_fixed : ''}`} style={style} title="返回" onClick={this.onBtnClicked}>
                    <RollbackOutlined/>
                </p>
            </div>
        );
    }
}

export default ReturnBtn;
