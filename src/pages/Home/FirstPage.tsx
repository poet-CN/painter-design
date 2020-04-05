import React, { Component } from 'react';
import { FullPageApi } from './index';
import style from './style.less';

interface FirstPageProps {
    fullpageApi: FullPageApi;
}

class FirstPage extends Component<FirstPageProps, {}> {
    render() {
        return (
            <div className={`${style.page1_wrapper} section pr`}>
                <header className={`${style.header} clear_float`}>
                    <div className={`${style.logo} fl`}>
                        <p>QIAN</p>
                    </div>
                    <ul className={`${style.nav} fr clear_float`}>
                        <li>
                            <p>Welcome</p>
                        </li>
                        <li>
                            <p>Me</p>
                        </li>
                        <li>
                            <p>Work</p>
                        </li>
                        <li>
                            <p>Contract</p>
                        </li>
                    </ul>
                </header>
                <div className={style.home_introduce}>
                    <h1>WELCOME</h1>
                    <p>This is a designer</p>
                    <p>with</p>
                    <p>a sense for discovery & a passion for invention</p>
                </div>
            </div>
        );
    }
}

export default FirstPage;
