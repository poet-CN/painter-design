import React, { Component } from 'react';
import { FullPageApi } from './index';
import style from './style.less';

interface ThirdPageProps {
    fullpageApi: FullPageApi;
}

class ThirdPage extends Component<ThirdPageProps, {}> {
    render() {
        return (
            <div className={`${style.page3_wrapper} section pr`}>
                <div className="wrapper">
                    <div>
                        <p className={style.section_title}>
                            <span>Work</span>
                            <span>爱设计</span>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default ThirdPage;
