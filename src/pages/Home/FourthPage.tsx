import React, { Component } from 'react';
import { PhoneOutlined, MailOutlined, WechatOutlined, GlobalOutlined } from '@ant-design/icons';
import { FullPageApi } from './index';
import style from './style.less';

interface FourthPageProps {
    fullpageApi: FullPageApi;
}

class FourthPage extends Component<FourthPageProps, {}> {
    render() {
        return (
            <div className={`${style.page4_wrapper} section pr`}>
                <div className="wrapper">
                    <div className={style.section_title}>
                        <span>Contract</span>
                        <span>创造价值</span>
                    </div>
                    <ul className={`${style.contract_info} clear_float`}>
                        <li>
                            <PhoneOutlined />
                            <span>17302213907</span>
                        </li>
                        <li>
                            <MailOutlined />
                            <span>idqian@foxmail.com</span>
                        </li>
                        <li>
                            <WechatOutlined />
                            <span>qianxixixixi_</span>
                        </li>
                        <li>
                            <GlobalOutlined />
                            <span>https://idqian.github.io</span>
                        </li>
                    </ul>
                    <div className={style.epilogue}>
                        <p>Looking forward to your contact.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default FourthPage;
