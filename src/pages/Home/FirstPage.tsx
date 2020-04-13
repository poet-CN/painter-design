import React, { Component } from 'react';
import { FullPageApi } from './index';
import style from './style.less';

interface FirstPageProps {
    fullpageApi: FullPageApi;
}

class FirstPage extends Component<FirstPageProps, {}> {
    nav = ['Welcome', 'Me', 'Work', 'Contract'];

    togglePage = (e: any) => {
        const target = e.nativeEvent.target || e.nativeEvent.srcElement;
        if (target) {
            if (target.nodeName.toLowerCase() === 'p') {
                this.props.fullpageApi.moveTo(Number(target.dataset.index) + 1);
            }
        }
    };

    render() {
        return (
            <div className={`${style.page1_wrapper} section pr`}>
                <header className={`${style.header} clear_float`}>
                    <div className={`${style.logo} fl`}>
                        <p>QIAN</p>
                    </div>
                    <ul className={`${style.nav} fr clear_float`} onClick={this.togglePage}>
                        {
                            this.nav.map((item, index) => (
                                <li key={item} className="cp">
                                    <p data-index={index.toString()}>{item}</p>
                                </li>
                            ))
                        }
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
